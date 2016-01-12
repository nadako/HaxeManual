## 2.7.2 Implementing Dynamic

Classes can [implement](types-interfaces.md) `Dynamic` and `Dynamic<T>` which enables arbitrary field access. In the former case, fields can have any type, in the latter, they are constrained to be compatible with the parameter type:

{% codeasset haxe %}assets/ImplementsDynamic.hx{% endcodeasset %}

Implementing `Dynamic` does not satisfy the requirements of other implemented interfaces. The expected fields still have to be implemented explicitly.

Classes that implement `Dynamic` (with or without type parameter) can also utilize a special method named `resolve`. If a [read access](dictionary.md#define-read-access) is made and the field in question does not exist, the `resolve` method is called with the field name as argument:

{% codeasset haxe %}assets/DynamicResolve.hx{% endcodeasset %}
