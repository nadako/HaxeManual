## 10.2.5 Map

A `Map` is a container composed of **key**, **value** pairs.  A `Map` is also commonly referred to as an associative array, dictionary, or symbol table. The following code gives a short example of working with maps:

{% codeasset haxe %}assets/MapExample.hx{% endcodeasset %}

Under the hood, a `Map` is an [abstract](types-abstract.md) type. At compile time, it gets converted to one of several specialized types depending on the **key** type:

* `String`: `haxe.ds.StringMap`
* `Int`: `haxe.ds.IntMap`
* `EnumValue`: `haxe.ds.EnumValueMap`
* `{}`: `haxe.ds.ObjectMap`

The `Map` type does not exist at runtime and has been replaced with one of the above objects. 

Map defines [array access](types-abstract-array-access.md) using its key type.

See the [Map API](http://api.haxe.org/Map.html) for details of its methods.
