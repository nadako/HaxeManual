## 10.1 String

{% define "String" %}
A String is a sequence of characters.
{% enddefine %}

##### Character code
Use the `.code` property on a constant single-char string in order to compile its ASCII character code:

```haxe
"#".code // will compile as 35
```

See the [String API](http://api.haxe.org/String.html) for details about its methods.
