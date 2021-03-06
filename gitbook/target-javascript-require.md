## 12.1.8 Loading extern classes using "require" function

##### since Haxe 3.2.0

Modern JavaScript platforms, such as Node.js provide a way of loading objects
from external modules using the "require" function. Haxe supports automatic generation
of "require" statements for `extern` classes.

This feature can be enabled by specifying `@:jsRequire` metadata for the extern class. If our `extern` class represents a whole module, we pass a single argument to the `@:jsRequire` metadata specifying the name of the module to load:

{% codeasset haxe %}assets/JSRequireModule.hx{% endcodeasset %}

In case our `extern` class represents an object within a module, second `@:jsRequire` argument specifies an object to load from a module:

{% codeasset haxe %}assets/JSRequireObject.hx{% endcodeasset %}

The second argument is a dotted-path, so we can load sub-objects in any hierarchy.

If we need to load custom JavaScript objects in runtime, a `js.Lib.require` function can be used. It takes `String` as its only argument and returns `Dynamic`, so it is advised to be assigned to a strictly typed variable.
