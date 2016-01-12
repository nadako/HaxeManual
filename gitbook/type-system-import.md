## 3.7.2 Import

If a type path is used multiple times in a .hx file, it might make sense to use an `import` to shorten it. This allows omitting the package when using the type:

[include](assets/Import.hx)

With `haxe.ds.StringMap` being imported in the first line, the compiler is able to resolve the unqualified identifier `StringMap` in the `main` function to this package. The module `StringMap` is said to be **imported** into the current file.

In this example, we are actually importing a **module**, not just a specific type within that module. This means that all types defined within the imported module are available:

[include](assets/Import2.hx)

The type `Binop` is an [enum](types-enum-instance.md) declared in the module `haxe.macro.Expr`, and thus available after the import of said module. If we were to import only a specific type of that module, e.g. `import haxe.macro.Expr.ExprDef`, the program would fail to compile with `Class not found : Binop`.

There are several aspects worth knowing about importing:

* The bottommost import takes priority (detailed in [Resolution Order](type-system-resolution-order.md)).
* The [static extension](lf-static-extension.md) keyword `using` implies the effect of `import`.
* If an enum is imported (directly or as part of a module import), all its [enum constructors](types-enum-constructor.md) are also imported (this is what allows the `OpAdd` usage in the above example).

Furthermore, it is also possible to import [static fields](class-field.md) of a class and use them unqualified:

[include](assets/Import3.hx)

Special care has to be taken with field names or local variable names that conflict with a package name: Since they take priority over packages, a local variable named `haxe` blocks off usage the entire `haxe` package.

##### Wildcard import

Haxe allows using `.*` to allow import of all modules in a package, all types in a module or all static fields in a type. It is important to understand that this kind of import only crosses a single level as we can see in the following example:

[include](assets/ImportWildcard.hx)

Using the wildcard import on `haxe.macro` allows accessing `Expr` which is a module in this package, but it does not allow accessing `ExprDef` which is a sub-type of the `Expr` module. This rule extends to static fields when a module is imported.

When using wildcard imports on a package the compiler does not eagerly process all modules in that package. This means that these modules are never actually seen by the compiler unless used explicitly and are then not part of the generated output.

##### Import with alias

If a type or static field is used a lot in an importing module it might help to alias it to a shorter name. This can also be used to disambiguate conflicting names by giving them a unique identifier.

[include](assets/ImportAlias.hx)

Here we import `String.fromCharCode` as `f` which allows us to use `f(65)` and `f(66)`. While the same could be achieved with a local variable, this method is compile-time exclusive and guaranteed to have no run-time overhead.

##### since Haxe 3.2.0

Haxe also allows the more natural `as` in place of `in`.