## 6.4.3 Variable capture

It is possible to catch any value of a sub-pattern by matching it against an identifier:

{% codeasset haxe %}assets/PatternMatching.hx{% endcodeasset %}

This would return one of the following:

* If `myTree` is a `Leaf`, its name is returned.
* If `myTree` is a `Node` whose left sub-tree is a `Leaf`, its name is returned (this will apply here, returning `"foo"`).
* Otherwise `"none"` is returned.

It is also possible to use = to capture values which are further matched:

{% codeasset haxe %}assets/PatternMatching.hx{% endcodeasset %}

Here, `leafNode` is bound to `Leaf("foo")` if the input matches that. In all other cases, `myTree` itself is returned: `case x` works similar to `case _` in that it matches anything, but with an identifier name like `x` it also binds the matched value to that variable.
