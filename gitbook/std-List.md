## 10.2.3 List

A `List` is a **collection** for storing elements.  On the surface, a list is similar to an [Array](std-Array.md).  However, the underlying implementation is very different.  This results in several functional differences:

1. A list can not be indexed using square brackets, i.e. `[0]`.
2. A list can not be initialized.
3. There are no list comprehensions.
4. A list can freely modify/add/remove elements while iterating over them.

A simple example for working with lists:
{% codeasset haxe %}assets/ListExample.hx{% endcodeasset %}

See the [List API](http://api.haxe.org/List.html) for details about the list methods.
