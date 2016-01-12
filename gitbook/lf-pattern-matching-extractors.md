## 6.4.9 Extractors

##### since Haxe 3.1.0

Extractors allow applying transformations to values being matched. This is often useful when a small operation is required on a matched value before matching can continue:

[include](assets/Extractor2.hx)

Here we have to capture the argument value of the `TString` enum constructor in a variable `temp` and use a nested switch on `temp.toLowerCase()`. Obviously, we want matching to succeed if `TString` holds a value of `"foo"` regardless of its casing. This can be simplified with extractors:

[include](assets/Extractor.hx)

Extractors are identified by the `extractorExpression => match` expression. The compiler generates code which is similar to the previous example, but the original syntax was greatly simplified. Extractors consist of two parts, which are separated by the `=>` operator:

1. The left side can be any expression, where all occurrences of underscore `_` are replaced with the currently matched value.
2. The right side is a pattern which is matched against the result of the evaluation of the left side.

Since the right side is a pattern, it can contain another extractor. The following example "chains" two extractors:

[include](assets/Extractor4.hx)

This traces `12` as a result of the calls to `add(3, 1)`, where `3` is the matched value, and `mul(4, 3)` where `4` is the result of the `add` call. It is worth noting that the `a` on the right side of the second `=>` operator is a [capture variable](lf-pattern-matching-variable-capture.md).

It is currently not possible to use extractors within [or-patterns](lf-pattern-matching-or.md):

[include](assets/Extractor5.hx)

However, it is possible to have or-patterns on the right side of an extractor, so the previous example would compile without the parentheses.
