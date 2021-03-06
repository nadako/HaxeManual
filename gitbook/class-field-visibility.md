## 4.4.1 Visibility

Fields are by default **private**, meaning that only the class and its sub-classes may access them. They can be made **public** by using the `public` access modifier, allowing access from anywhere.

{% codeasset haxe %}assets/Visibility.hx{% endcodeasset %}

Access to field `available` of class `MyClass` is allowed from within `Main` because it is denoted as being `public`. However, while access to field `unavailable` is allowed from within class `MyClass`, it is not allowed from within class `Main` because it is `private` (explicitly, although this identifier is redundant here).

The example demonstrates visibility through **static** fields, but the rules for member fields are equivalent. The following example demonstrates visibility behavior for when [inheritance](types-class-inheritance.md) is involved.

{% codeasset haxe %}assets/Visibility2.hx{% endcodeasset %}

We can see that access to `child1.baseField()` is allowed from within `Child2` even though `child1` is of a different type, `Child1`. This is because the field is defined on their common ancestor class `Base`, contrary to field `child1Field` which can not be accessed from within `Child2`.

Omitting the visibility modifier usually defaults the visibility to `private`, but there are exceptions where it becomes `public` instead:

1. If the class is declared as `extern`.
2. If the field is declared on an [interface](types-interfaces.md).
3. If the field [overrides](class-field-overriding.md) a public field.

> ##### Trivia: Protected
>
> Haxe has no notion of a `protected` keyword known from Java, C++ and other object-oriented languages. However, its `private` behavior is equal to those language's protected behavior, so Haxe actually lacks their real private behavior.
