## 10.3.5 Map

The `map` method of a regular expression object can be used to replace matched substrings using a custom function. This function takes a regular expression object as its first argument so we may use it to get additional information about the match being done and do conditional replacement. For example:

{% codeasset haxe %}assets/ERegMap.hx{% endcodeasset %}
