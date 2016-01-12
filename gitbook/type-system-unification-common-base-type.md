## 3.5.5 Common Base Type

Given a set of multiple types, a **common base type** is a type which all types of the set unify against:

[include](assets/UnifyMin.hx)

Although `Base` is not mentioned, the Haxe Compiler manages to infer it as the common type of `Child1` and `Child2`. The Haxe Compiler employs this kind of unification in the following situations:

* array declarations
* `if`/`else`
* cases of a `switch`
