## 6.7 Iterators

With Haxe it is very easy to define custom iterators and iterable data types. These concepts are represented by the types `Iterator<T>` and `Iterable<T>` respectively:

```haxe
typedef Iterator<T> = {
	function hasNext() : Bool;
	function next() : T;
}

typedef Iterable<T> = {
	function iterator() : Iterator<T>;
}
```

Any [class](types-class-instance.md) which [structurally unifies](type-system-structural-subtyping.md) with one of these types can be iterated over using a [for-loop](expression-for.md). That is, if the class defines methods `hasNext` and `next` with matching return types it is considered an iterator, if it defines a method `iterator` returning an `Iterator<T>` it is considered an iterable type.

{% codeasset haxe %}assets/Iterator.hx{% endcodeasset %}

The type `MyStringIterator` in this example qualifies as iterator: It defines a method `hasNext` returning `Bool` and a method `next` returning `String`, making it compatible with `Iterator<String>`. The `main` method instantiates it, then iterates over it.

{% codeasset haxe %}assets/Iterable.hx{% endcodeasset %}

Here we do not setup a full iterator like in the previous example, but instead define that the `MyArrayWrap<T>` has a method `iterator`, effectively forwarding the iterator method of the wrapped `Array<T>` type.
