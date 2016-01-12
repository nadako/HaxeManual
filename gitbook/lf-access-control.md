## 6.10 Access Control

Access control can be used if the basic [visibility](class-field-visibility.md) options are not sufficient. It is applicable at **class-level** and at **field-level** and knows two directions:

* Allowing access: The target is granted access to the given class or field by using the `:allow(target)` [metadata](lf-metadata.md).
* Forcing access: A target is forced to allow access to the given class or field by using the `:access(target)` [metadata](lf-metadata.md).

In this context, a **target** can be the [dot-path](dictionary.md#define-type-path) to

* a **class field**,
* a **class** or **abstract** type, or
* a **package**.

Target does **not** respect imports, so the fully qualified path has to be used.

If it is a class or abstract type, access modification extends to all fields of that type. Likewise, if it is a package, access modification extends to all types of that package and recursively to all fields of these types.

[include](assets/ACL.hx)

Here, `MyClass.foo` can be accessed from the `main`-method because `MyClass` is annotated with `@:allow(Main)`. This would also work with `@:allow(Main.main)` and both versions could alternatively be annotated to the field `foo` instead of the class `MyClass`:

[include](assets/ACL2.hx)

If a type cannot be modified to allow this kind of access, the accessing method may force access:

[include](assets/ACL3.hx)

The `@:access(MyClass.foo)` annotation effectively subverts the visibility of the `foo` field within the `main`-method. 

> ##### Trivia: On the choice of metadata
>
> The access control language feature uses the Haxe metadata syntax instead of additional language-specific syntax. There are several reasons for that:
> 
> 
> * Additional syntax often adds complexity to the language parsing, and also adds (too) many keywords.
> * Additional syntax requires additional learning by the language user, whereas metadata syntax is something that is already known.
> * The metadata syntax is flexible enough to allow extension of this feature.
> * The metadata can be accessed/generated/modified by Haxe macros.
> 
> Of course, the main drawback of using metadata syntax is that you get no error report in case you misspell either the metadata key (@:acesss for instance) or the class/package name. However, with this feature you will get an error when you try to access a private field that you are not allowed to, therefore there is no possibility for silent errors.

##### since Haxe 3.1.0

If access is allowed to an [interface](types-interfaces.md), it extends to all classes implementing that interface:

[include](assets/ACL4.hx)

This is also true for access granted to parent classes, in which case it extends to all child classes.

> ##### Trivia: Broken feature
>
> Access extension to child classes and implementing classes was supposed to work in Haxe 3.0 and even documented accordingly. While writing this manual it was found that this part of the access control implementation was simply missing.
