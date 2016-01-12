## 6.4.7 Guards

It is also possible to further restrict patterns with the `case ... if(condition):` syntax:

{% codeasset haxe %}assets/PatternMatching.hx{% endcodeasset %}

The first case has an additional guard condition `if (b > a)`. It will only be selected if that condition holds, otherwise matching continues with the next case.
