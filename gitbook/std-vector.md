## 10.2.2 Vector

A `Vector` is an optimized fixed-length **collection** of elements. Much like [Array](std-Array.md), it has one [type parameter](type-system-type-parameters.md) and all elements of a vector must be of the specified type, it can be **iterated over** using a [for loop](expression-for.md) and accessed using [array access syntax](types-abstract-array-access.md). However, unlike `Array` and `List`, vector length is specified on creation and cannot be changed later.

{% codeasset haxe %}assets/Vector.hx{% endcodeasset %}

`haxe.ds.Vector` is implemented as an abstract type ([Abstract](types-abstract.md)) over a native array implementation for given target and can be faster for fixed-size collections, because the memory for storing its elements is pre-allocated.

See the [Vector API](http://api.haxe.org/haxe/ds/Vector.html) for details about the vector methods.
