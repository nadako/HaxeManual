## 3.4 Variance

While variance is also relevant in other places, it occurs particularly often with type parameters and comes as a surprise in this context. Additionally, it is very easy to trigger variance errors:

[include](assets/Variance.hx)

Apparently, an `Array<Child>` cannot be assigned to an `Array<Base>`, even though `Child` can be assigned to `Base`. The reason for this might be somewhat unexpected: It is not allowed because arrays can be written to, e.g. via their `push()` method. It is easy to generate problems by ignoring variance errors:

[include](assets/Variance2.hx)

Here we subvert the type checker by using a [cast](expression-cast.md), thus allowing the assignment after the commented line. With that we hold a reference `bases` to the original array, typed as `Array<Base>`. This allows pushing another type compatible with `Base` (`OtherChild`) onto that array. However, our original reference `children` is still of type `Array<Child>` and things go bad when we encounter the `OtherChild` instance in one of its elements while iterating.

If `Array` had no `push()` method and no other means of modification, the assignment would be safe because no incompatible type could be added to it. In Haxe, we can achieve this by restricting the type accordingly using [structural subtyping](type-system-structural-subtyping.md):

[include](assets/Variance3.hx)

We can safely assign with `b` being typed as `MyArray<Base>` and `MyArray` only having a `pop()` method. There is no method defined on `MyArray` which could be used to add incompatible types, it is thus said to be **covariant**.

> ##### Define: Covariance
>
> A [compound type](dictionary.md#define-compound-type) is considered covariant if its component types can be assigned to less specific components, i.e. if they are only read, but never written.

> ##### Define: Contravariance
>
> A [compound type](dictionary.md#define-compound-type) is considered contravariant if its component types can be assigned to less generic components, i.e. if they are only written, but never read.
