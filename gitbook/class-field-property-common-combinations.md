## 4.2.1 Common accessor identifier combinations

The next example shows common access identifier combinations for properties:

{% codeasset haxe %}assets/Property2.hx{% endcodeasset %}

The JavaScript output helps understand what the field access in the `main`-method is compiled to:

```haxe
var Main = function() {
	var v = this.get_x();
	this.set_x(2);
	var _g = this;
	_g.set_x(_g.get_x() + 1);
};
```

As specified, the read access generates a call to `get_x()`, while the write access generates a call to `set_x(2)` where `2` is the value being assigned to `x`. The way the `+=` is being generated might look a little odd at first, but can easily be justified by the following example:

{% codeasset haxe %}assets/Property3.hx{% endcodeasset %}

What happens here is that the expression part of the field access to `x` in the `main` method is **complex**: It has potential side-effects, such as the construction of `Main` in this case. Thus, the compiler cannot generate the `+=` operation as `new Main().x = new Main().x + 1` and has to cache the complex expression in a local variable:

```haxe
Main.main = function() {
	var _g = new Main();
	_g.set_x(_g.get_x() + 1);
}
```
