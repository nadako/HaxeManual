## 10.10.1 Parsing JSON

Use the [haxe.Json.parse](http://api.haxe.org/haxe/Json.html#parse) static method to parse **JSON** data and obtain a Haxe value from it:
{% codeasset haxe %}assets/JsonParse.hx{% endcodeasset %}

Note that the type of the object returned by `haxe.Json.parse` is `Dynamic`, so if the structure of our data is well-known, we may want to specify a type using [anonymous structures](types-anonymous-structure.md). This way we provide compile-time checks for accessing our data and most likely more optimal code generation, because compiler knows about types in a structure:
{% codeasset haxe %}assets/JsonParseTyped.hx{% endcodeasset %}
