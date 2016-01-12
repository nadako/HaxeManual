## 2.4.2 Using enums

Enums are a good choice if only a finite set of values should be allowed. The individual [constructors](types-enum-constructor.md) then represent the allowed variants and enable the compiler to check if all possible values are respected. This can be seen here:

[include](assets/Color2.hx)

After retrieving the value of `color` by assigning the return value of `getColor()` to it, a [`switch` expression](expression-switch.md) is used to branch depending on the value. The first three cases `Red`, `Green` and `Blue` are trivial and correspond to the constructors of `Color` that have no arguments. The final case `Rgb(r, g, b)` shows how the argument values of a constructor can be extracted: they are available as local variables within the case body expression, just as if a [`var` expression](expression-var.md) had been used.

Advanced information on using the `switch` expression will be explored later in the section on [pattern matching](lf-pattern-matching.md).
