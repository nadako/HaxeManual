## 6.4.8 Match on multiple values

Array syntax can be used to match on multiple values:

[include](assets/PatternMatching.hx)

This is quite similar to usual array matching, but there are differences:

* The number of elements is fixed, so patterns of different array length will not be accepted.
* It is not possible to capture the switch value in a variable, i.e. `case x` is not allowed (`case _` still is).
