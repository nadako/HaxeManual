## 6.4.4 Structure matching

It is also possible to match against the fields of anonymous structures and instances:

{% codeasset haxe %}assets/PatternMatching.hx{% endcodeasset %}

In the second case we bind the matched `name` field to identifier `n` if `rating` matches `"awesome"`. Of course this structure could also be put into the `Tree` from the previous example to combine structure and enum matching.

A limitation with regards to class instances is that you cannot match against fields of their parent class.
