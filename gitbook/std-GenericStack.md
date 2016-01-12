## 10.2.4 GenericStack

A `GenericStack`, like `Array` and `List` is a container for storing elements.  It has one [type parameter](type-system-type-parameters.md) and all elements of the stack must be of the specified type.   Here is a small example program for initializing and working with a `GenericStack`.
{% codeasset haxe %}assets/GenericStackExample.hx{% endcodeasset %}
> ##### Trivia: FastList
>
> In Haxe 2, the GenericStack class was known as FastList.  Since its behavior more closely resembled a typical stack, the name was changed for Haxe 3.
The **Generic** in `GenericStack` is literal.  It is attributed with the `:generic` metadata.  Depending on the target, this can lead to improved performance on static targets.  See [Generic](type-system-generic.md) for more details.

See the [GenericStack API](http://api.haxe.org/haxe/ds/GenericStack.html) for details about its methods.
