## 6.6 Array Comprehension

Array comprehension in Haxe uses existing syntax to allow concise initialization of arrays. It is identified by `for` or `while` constructs:

{% codeasset haxe %}assets/ArrayComprehension.hx{% endcodeasset %}

Variable `a` is initialized to an array holding the numbers 0 to 9. The compiler generates code which adds the value of each loop iteration to the array, so the following code would be equivalent:

```haxe
var a = [];
for (i in 0...10) a.push(i);
```

Variable `b` is initialized to an array with the same values, but through a different comprehension style using `while` instead of `for`. Again, the following code would be equivalent:

```haxe
var i = 0;
var a = [];
while(i < 10) a.push(i++);
```

The loop expression can be anything, including conditions and nested loops, so the following works as expected:

{% codeasset haxe %}assets/AdvArrayComprehension.hx{% endcodeasset %}
