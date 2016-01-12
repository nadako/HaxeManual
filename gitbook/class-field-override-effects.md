## 4.3.2 Effects of variance and access modifiers

Overriding adheres to the rules of [variance](type-system-variance.md). That is, their argument types allow **contravariance** (less specific types) while their return type allows **covariance** (more specific types):

{% codeasset haxe %}assets/OverrideVariance.hx{% endcodeasset %}

Intuitively, this follows from the fact that arguments are "written to" the function and the return value is "read from" it.

The example also demonstrates how [visibility](class-field-visibility.md) may be changed: An overriding field may be `public` if the overridden field is `private`, but not the other way around.

It is not possible to override fields which are declared as [`inline`](class-field-inline.md). This is due to the conflicting concepts: While inlining is done at compile-time by replacing a call with the function body, overriding fields necessarily have to be resolved at runtime.
