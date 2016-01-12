## 6.4.6 Or patterns

The `|` operator can be used anywhere within patterns to describe multiple accepted patterns:

{% codeasset haxe %}assets/PatternMatching.hx{% endcodeasset %}

If there is a captured variable in an or-pattern, it must appear in both its sub-patterns.
