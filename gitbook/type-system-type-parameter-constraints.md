## 3.2.1 Constraints

Type parameters can be constrained to multiple types:

[include](assets/Constraints.hx)

Type parameter `T` of method `test` is constrained to the types `Iterable<String>` and `Measurable`. The latter is defined using a [typedef](type-system-typedef.md) for convenience and requires compatible types to have a read-only [property](class-field-property.md) named `length` of type `Int`. The constraints then say that a type is compatible if

* it is compatible with `Iterable<String>` and
* has a `length`-property of type `Int`.

We can see that invoking `test` with an empty array in line 7 and an `Array<String>` in line 8 works fine. This is because `Array` has both a `length`-property and an `iterator`-method. However, passing a `String` as argument in line 9 fails the constraint check because `String` is not compatible with `Iterable<T>`.
