## 4.4.2 Inline

The `inline` keyword allows function bodies to be directly inserted in place of calls to them. This can be a powerful optimization tool, but should be used judiciously as not all functions are good candidates for inline behavior. The following example demonstrates the basic usage:

[include](assets/Inline.hx)

The generated JavaScript output reveals the effect of inline:

```haxe
(function () { "use strict";
var Main = function() { }
Main.main = function() {
	var a = 1;
	var b = 2;
	var c = (a + b) / 2;
}
Main.main();
})();
```

As evident, the function body `(s1 + s2) / 2` of field `mid` was generated in place of the call to `mid(a, b)`, with `s1` being replaced by `a` and `s2` being replaced by `b`. This avoids a function call which, depending on the target and frequency of occurrences, may yield noticeable performance improvements.

It is not always easy to judge if a function qualifies for being inline. Short functions that have no writing expressions (such as a `=` assignment) are usually a good choice, but even more complex functions can be candidates. However, in some cases inlining can actually be detrimental to performance, e.g. because the compiler has to create temporary variables for complex expressions.

Inline is not guaranteed to be done. The compiler might cancel inlining for various reasons or a user could supply the `--no-inline` command line argument to disable inlining. The only exception is if the class is [extern](lf-externs.md) or if the class field has the `:extern` [metadata](lf-metadata.md), in which case inline is forced. If it cannot be done, the compiler emits an error.

It is important to remember this when relying on inline:

[include](assets/InlineRelying.hx)

If the call to `error` is inlined the program compiles correctly because the control flow checker is satisfied due to the inlined [throw](expression-throw.md) expression. If inline is not done, the compiler only sees a function call to `error` and emits the error `A return is missing here`.
