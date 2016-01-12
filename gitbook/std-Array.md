## 10.2.1 Array

An `Array` is a collection of elements. It has one [type parameter](type-system-type-parameters.md) which corresponds to the type of these elements. Arrays can be created in three ways:

1. By using their constructor: `new Array()`
2. By using [array declaration syntax](expression-array-declaration.md): `[1, 2, 3]`
3. By using [array comprehension](lf-array-comprehension.md): `[for (i in 0...10) if (i % 2 == 0) i]`

Arrays come with an [API](http://api.haxe.org/Array.html) to cover most use-cases. Additionally they allow read and write [array access](expression-array-access.md):

{% codeasset haxe %}assets/ArrayAccess.hx{% endcodeasset %}

Since array access in Haxe is unbounded, i.e. it is guaranteed to not throw an exception, this requires further discussion:

* If a read access is made on a non-existing index, a target-dependent value is returned.
* If a write access is made with a positive index which is out of bounds, `null` (or the [default value](dictionary.md#define-default-value) for [basic types](types-basic-types.md) on [static targets](dictionary.md#define-static-target)) is inserted at all positions between the last defined index and the newly written one.
* If a write access is made with a negative index, the result is unspecified.

Arrays define an [iterator](lf-iterators.md) over their elements. This iteration is typically optimized by the compiler to use a [`while` loop](expression-while.md) with array index:

{% codeasset haxe %}assets/ArrayIterator.hx{% endcodeasset %}

Haxe generates this optimized JavaScript output:

```haxe
Main.main = function() {
	var scores = [110,170,35];
	var sum = 0;
	var _g = 0;
	while(_g < scores.length) {
		var score = scores[_g];
		++_g;
		sum += score;
	}
	console.log(sum);
};
```

Haxe does not allow arrays of mixed types unless the parameter type is forced to [`Dynamic`](types-dynamic.md):

{% codeasset haxe %}assets/ArrayDynamic.hx{% endcodeasset %}

> ##### Trivia: Dynamic Arrays
>
> In Haxe 2, mixed type array declarations were allowed. In Haxe 3, arrays can have mixed types only if they are explicitly declared as `Array<Dynamic>`.

See the [Array API](http://api.haxe.org/Array.html) for details about its methods.
