## 3.1.1 Extensions

Extensions are used to express that a structure has all the fields of a given type as well as some additional fields of its own:

{% codeasset haxe %}assets/Extension.hx{% endcodeasset %}
The greater-than operator `>` denotes that an extension of `Iterable<T>` is being created, with the additional class fields following. In this case, a read-only [property](class-field-property.md) `length` of type `Int` is required.

In order to be compatible with `IterableWithLength<T>`, a type then must be compatible with `Iterable<T>` and also provide a read-only `length` property of type `Int`. The example assigns an `Array`, which happens to fulfill these requirements.

##### since Haxe 3.1.0

It is also possible to extend multiple structures:

{% codeasset haxe %}assets/Extension2.hx{% endcodeasset %}
