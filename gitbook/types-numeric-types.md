## 2.1.1 Numeric types

{% define "Float" %}
Represents a double-precision IEEE 64-bit floating point number.
{% enddefine %}

{% define "Int" %}
Represents an integral number.
{% enddefine %}

While every `Int` can be used where a `Float` is expected (that is, `Int` **is assignable to** or **unifies with** `Float`), the reverse is not true: Assigning a `Float` to an `Int` might lose precision and is not allowed implicitly.
