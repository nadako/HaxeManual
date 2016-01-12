## 9.5.1 Enum building

Building [enums](types-enum-instance.md) is analogous to building classes with a simple mapping:

* Enum constructors without arguments are variable fields `FVar`.
* Enum constructors with arguments are method fields `FFun`.

[include](assets/EnumBuildingMacro.hx)

[include](assets/EnumBuilding.hx)

Because enum `E` is annotated with a `:build` metadata, the called macro builds two constructors `A` and `B` "into" it. The former is added with the kind being `FVar(null, null)`, meaning it is a constructor without argument. For the latter, we use [reification](macro-reification-expression.md) to obtain an instance of `haxe.macro.Expr.Function` with a singular `Int` argument.

The `main` method proves the structure of our generated enum by [matching](lf-pattern-matching.md) it. We can see that the generated type is equivalent to this:

```haxe
enum E {
	A;
	B(value:Int);
}
```
