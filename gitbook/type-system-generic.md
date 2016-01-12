## 3.3 Generic

Usually, the Haxe Compiler generates only a single class or function even if it has type parameters. This results in a natural abstraction where the code generator for the target language has to assume that a type parameter could be of any type. The generated code then might have to perform some type checks which can be detrimental to performance.

A class or function can be made **generic** by attributing it with the `:generic` [metadata](lf-metadata.md). This causes the compiler to emit a distinct class/function per type parameter combination with mangled names. A specification like this can yield a boost in performance-critical code portions on [static targets](dictionary.md#define-static-target) at the cost of a larger output size:

{% codeasset haxe %}assets/GenericClass.hx{% endcodeasset %}

It seems unusual to see the explicit type `MyValue<String>` here as we usually let [type inference](type-system-type-inference.md) deal with this. Nonetheless, it is indeed required in this case. The compiler has to know the exact type of a generic class upon construction. The JavaScript output shows the result:

```haxe
(function () { "use strict";
var Test = function() { };
Test.main = function() {
	var a = new MyValue_String("Hello");
	var b = new MyValue_Int(5);
};
var MyValue_Int = function(value) {
	this.value = value;
};
var MyValue_String = function(value) {
	this.value = value;
};
Test.main();
})();
```

We can identify that `MyValue<String>` and `MyValue<Int>` have become `MyValue_String` and `MyValue_Int` respectively. This is similar for generic functions:

{% codeasset haxe %}assets/GenericFunction.hx{% endcodeasset %}

Again, the JavaScript output makes it obvious:

```haxe
(function () { "use strict";
var Main = function() { }
Main.method_Int = function(t) {
}
Main.method_String = function(t) {
}
Main.main = function() {
	Main.method_String("foo");
	Main.method_Int(1);
}
Main.main();
})();
```
