## 4.2.2 Impact on the type system

The presence of properties has several consequences on the type system. Most importantly, it is necessary to understand that properties are a compile-time feature and thus **require the types to be known**. If we were to assign a class with properties to `Dynamic`, field access would **not** respect accessor methods. Likewise, access restrictions no longer apply and all access is virtually public.

When using `get` or `set` access identifier, the compiler ensures that the getter and setter actually exists. The following problem does not compile:

[include](assets/Property4.hx)

The method `get_x` is missing, but it need not be declared on the class defining the property itself as long as a parent class defines it:

[include](assets/Property5.hx)

The `dynamic` access modifier works exactly like `get` or `set`, but does not check for the existence
