## 3.6.1 Top-down Inference

Most of the time, types are inferred on their own and may then be unified with an expected type. In a few places, however, an expected type may be used to influence inference. We then speak of **top-down inference**.

{% define "Expected Type" %}
Expected types occur when the type of an expression is known before that expression has been typed, e.g. because the expression is argument to a function call. They can influence typing of that expression through what is called [top-down inference](type-system-top-down-inference.md).
{% enddefine %}

A good example are arrays of mixed types. As mentioned in [Dynamic](types-dynamic.md), the compiler refuses `[1, "foo"]` because it cannot determine an element type. Employing top-down inference, this can be overcome:

{% codeasset haxe %}assets/TopDownInference.hx{% endcodeasset %}

Here, the compiler knows while typing `[1, "foo"]` that the expected type is `Array<Dynamic>`, so the element type is `Dynamic`. Instead of the usual unification behavior where the compiler would attempt (and fail) to determine a [common base type](type-system-unification-common-base-type.md), the individual elements are typed against and unified with `Dynamic`.

We have seen another interesting use of top-down inference when [construction of generic type parameters](type-system-generic-type-parameter-construction.md) was introduced:

{% codeasset haxe %}assets/GenericTypeParameter.hx{% endcodeasset %}

The explicit types `String` and `haxe.Template` are used here to determine the return type of `make`. This works because the method is invoked as `make()`, so we know the return type will be assigned to the variables. Utilizing this information, it is possible to bind the unknown type `T` to `String` and `haxe.Template` respectively.
