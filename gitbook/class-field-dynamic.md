## 4.4.3 Dynamic

Methods can be denoted with the `dynamic` keyword to make them (re-)bindable:

[include](assets/DynamicFunction.hx)

The first call to `test()` invokes the original function which returns the `String` `"original"`. In the next line, `test` is **assigned** a new function. This is precisely what `dynamic` allows: Function fields can be assigned a new function. As a result, the next invocation of `test()` returns the `String` `"new"`.

Dynamic fields cannot be `inline` for obvious reasons: While inlining is done at compile-time, dynamic functions necessarily have to be resolved at runtime.
