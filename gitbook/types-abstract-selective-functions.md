## 2.8.4 Selective Functions

Since the compiler promotes abstract member functions to static functions, it is possible to define static functions by hand and use them on an abstract instance. The semantics here are similar to those of [static extensions](lf-static-extension.md), where the type of the first function argument determines for which types a function is defined:

{% codeasset haxe %}assets/SelectiveFunction.hx{% endcodeasset %}
The method `getString` of abstract `MyAbstract` is defined to accept a first argument of `MyAbstract<String>`. This causes it to be available on variable `a` on line 14 (because the type of `a` is `MyAbstract<String>`), but not on variable `b` whose type is `MyAbstract<Int>`.

> ##### Trivia: Accidental Feature
>
>  Rather than having actually been designed, selective functions were discovered. After the idea was first mentioned, it required only minor adjustments in the compiler to make them work. Their discovery also lead to the introduction of multi-type abstracts, such as Map.
