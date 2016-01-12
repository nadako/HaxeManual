## 2.8.3 Array Access

Array access describes the particular syntax traditionally used to access the value in an array at a certain offset. This is usually only allowed with arguments of type `Int`. Nevertheless, with abstracts it is possible to define custom array access methods. The [Haxe Standard Library](std.md) uses this in its `Map` type, where the following two methods can be found:

```haxe
@:arrayAccess
public inline function get(key:K) {
  return this.get(key);
}
@:arrayAccess
public inline function arrayWrite(k:K, v:V):V {
	this.set(k, v);
	return v;
}
```
There are two kinds of array access methods:

* If an `@:arrayAccess` method accepts one argument, it is a getter.
* If an `@:arrayAccess` method accepts two arguments, it is a setter.

The methods `get` and `arrayWrite` seen above then allow the following usage:

[include](assets/AbstractArrayAccess.hx)

At this point it should not be surprising to see that calls to the array access fields are inserted in the output:

```haxe
map.set("foo",1);
console.log(map.get("foo")); // 1
```

##### Order of array access resolving

Due to a bug in Haxe versions before 3.2 the order of checked `:arrayAccess` fields was undefined. This was fixed for Haxe 3.2 so that the fields are now consistently checked from top to bottom:

[include](assets/AbstractArrayAccessOrder.hx)

The array access `a[0]` is resolved to the `getInt1` field, leading to lower case `f` being returned. The result might be different in Haxe versions before 3.2.

Fields which are defined earlier take priority even if they require an [implicit cast](types-abstract-implicit-casts.md).
