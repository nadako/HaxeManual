## 6.4.2 Enum matching

Enums can be matched by their constructors in a natural way:

{% codeasset haxe %}assets/PatternMatching.hx{% endcodeasset %}

The pattern matcher will check each case from top to bottom and pick the first one that matches the input value. The following manual interpretation of each case rule helps understanding the process:

* `case Leaf(_)`: matching fails because `myTree` is a `Node`
* `case Node(_, Leaf(_))`: matching fails because the right sub-tree of `myTree` is not a `Leaf`, but another `Node`
* `case Node(_, Node(Leaf("bar"), _))`: matching succeeds
* `case _`: this is not checked here because the previous line matched
