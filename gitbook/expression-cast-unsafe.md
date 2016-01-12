## 5.23.1 unsafe cast

Unsafe casts are useful to subvert the type system. The compiler types `expr` as usual and then wraps it in a [monomorph](types-monomorph.md). This allows the expression to be assigned to anything.

Unsafe casts do not introduce any [dynamic](types-dynamic.md) types, as the following example shows:

{% codeasset haxe %}assets/UnsafeCast.hx{% endcodeasset %}

Variable `i` is typed as `Int` and then assigned to variable `s` using the unsafe cast `cast i`. This causes `s` to be of an unknown type, a monomorph. Following the usual rules of [unification](type-system-unification.md), it can then be bound to any type, such as `String` in this example.

These casts are called "unsafe" because the runtime behavior for invalid casts is not defined. While most [dynamic targets](dictionary.md#define-dynamic-target) are likely to work, it might lead to undefined errors on [static targets](dictionary.md#define-static-target).

Unsafe casts have little to no runtime overhead.
