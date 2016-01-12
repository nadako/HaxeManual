## 10.3.2 Groups

Specific information can be extracted from a matched string by using **groups**. If `match()` returns true, we can get groups using the `matched(X)` method, where X is the number of a group defined by regular expression pattern:

{% codeasset haxe %}assets/ERegGroups.hx{% endcodeasset %}

Note that group numbers start with 1 and `r.matched(0)` will always return the whole matched substring.

The `r.matchedPos()` will return the position of this substring in the original string:

{% codeasset haxe %}assets/ERegMatchPos.hx{% endcodeasset %}

Additionally, `r.matchedLeft()` and `r.matchedRight()` can be used to get substrings to the left and to the right of the matched substring:

{% codeasset haxe %}assets/ERegMatchLeftRight.hx{% endcodeasset %}
