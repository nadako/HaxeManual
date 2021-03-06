## 5.23.2 safe cast

Unlike [unsafe casts](expression-cast-unsafe.md), the runtime behavior in case of a failing cast is defined for safe casts:

{% codeasset haxe %}assets/SafeCast.hx{% endcodeasset %}

In this example we first cast a class instance of type `Child1` to `Base`, which succeeds because `Child1` is a [child class](types-class-inheritance.md) of `Base`. We then try to cast the same class instance to `Child2`, which is not allowed because instances of `Child2` are not instances of `Child1`.

The Haxe compiler guarantees that an exception of type `String` is [thrown](expression-throw.md) in this case. This exception can be caught using a [`try/catch` block](expression-try-catch.md).

Safe casts have a runtime overhead. It is important to understand that the compiler already generates type checks, so it is redundant to add manual checks, e.g. using `Std.is`. The intended usage is to try the safe cast and catch the `String` exception.
