## 6.4.5 Array matching

Arrays can be matched on fixed length:

{% codeasset haxe %}assets/PatternMatching.hx{% endcodeasset %}

This will trace `1` because `array[1]` matches `6`, and `array[0]` is allowed to be anything.
