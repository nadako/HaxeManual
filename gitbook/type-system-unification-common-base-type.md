## 3.5.5 Common Base Type

Given a set of multiple types, a **common base type** is a type which all types of the set unify against:

{% codeasset haxe %}assets/UnifyMin.hx{% endcodeasset %}
Although `Base` is not mentioned, the Haxe Compiler manages to infer it as the common type of `Child1` and `Child2`. The Haxe Compiler employs this kind of unification in the following situations:

* array declarations
* `if`/`else`
* cases of a `switch`
