## 2.8.5 Enum abstracts

##### since Haxe 3.1.0

By adding the `:enum` metadata to an abstract definition, that abstract can be used to define finite value sets:

[include](assets/AbstractEnum.hx)

The Haxe Compiler replaces all field access to the `HttpStatus` abstract with their values, as evident in the JavaScript output:

```haxe
Main.main = function() {
	var status = 404;
	var msg = Main.printStatus(status);
};
Main.printStatus = function(status) {
	switch(status) {
	case 404:
		return "Not found";
	case 405:
		return "Method not allowed";
	}
};
```

This is similar to accessing [variables declared as inline](class-field-inline.md), but has several advantages:

* The typer can ensure that all values of the set are typed correctly.
* The pattern matcher checks for [exhaustiveness](lf-pattern-matching-exhaustiveness.md) when [matching](lf-pattern-matching.md) an enum abstract.
* Defining fields requires less syntax.
