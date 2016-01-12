## 2.6.1 Optional Arguments

Optional arguments are declared by prefixing an argument identifier with a question mark `?`:

[include](assets/OptionalArguments.hx)

Function `test` has two optional arguments: `i` of type `Int` and `s` of `String`. This is directly reflected in the function type output by line 3. 
This example program calls `test` four times and prints its return value.

1. The first call is made without any arguments.
2. The second call is made with a singular argument `1`.
3. The third call is made with two arguments `1` and `"foo"`.
4. The fourth call is made with a singular argument `"foo"`.

The output shows that optional arguments which are omitted from the call have a value of `null`. This implies that the type of these arguments must admit `null` as value, which raises the question of its [nullability](types-nullability.md). The Haxe Compiler ensures that optional basic type arguments are nullable by inferring their type as `Null<T>` when compiling to a [static target](dictionary.md#define-static-target).

While the first three calls are intuitive, the fourth one might come as a surprise: It is indeed allowed to skip optional arguments if the supplied value is assignable to a later argument.
