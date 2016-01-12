## 10.2.6 Option

An [Option](http://api.haxe.org/haxe/ds/Option.html) is an [enum](types-enum-instance.md) in the Haxe Standard Library which is defined like so:

```haxe
enum Option<T> {
	Some(v:T);
	None;
}
```

It can be used in various situations, such as communicating whether or not a method had a valid return and if so, what value it returned:

{% codeasset haxe %}assets/OptionUsage.hx{% endcodeasset %}
