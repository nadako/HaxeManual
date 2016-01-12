## 4.3 Method

While [variables](class-field-variable.md) hold data, methods are defining behavior of a program by hosting [expressions](expression.md). We have seen method fields in every code example of this document with even the initial [Hello World](introduction-hello-world.md) example containing a `main` method:

{% codeasset haxe %}assets/HelloWorld.hx{% endcodeasset %}

Methods are identified by the `function` keyword. We can also learn that they

1. have a name (here: `main`),
2. have an argument list (here: empty `()`),
3. have a return type (here: `Void`),
4. may have [access modifiers](class-field-access-modifier.md) (here: `static` and `public`) and
5. may have an expression (here: `{trace("Hello World");}`).

We can also look at the next example to learn more about arguments and return types:

{% codeasset haxe %}assets/MethodField.hx{% endcodeasset %}

Arguments are given by an opening parenthesis `(` after the field name, a comma `,` separated list of argument specifications and a closing parenthesis `)`. Additional information on the argument specification is described in [Function Type](types-function.md).

The example demonstrates how [type inference](type-system-type-inference.md) can be used for both argument and return types. The method `myFunc` has two arguments but only explicitly gives the type of the first one, `f`, as `String`. The second one, `i`, is not type-hinted and it is left to the compiler to infer its type from calls made to it. Likewise, the return type of the method is inferred from the `return true` expression as `Bool`.
