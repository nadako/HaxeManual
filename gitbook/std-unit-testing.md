## 10.14 Unit testing

The Haxe Standard Library provides basic unit testing classes from the [haxe.unit](http://api.haxe.org/haxe/unit/) package. 

##### Creating new test cases

First, create a new class extending [haxe.unit.TestCase](http://api.haxe.org/haxe/unit/TestCase.html) and add own test methods. Every test method name must start with "`test`".

{% codeasset haxe %}assets/UnitTestCase.hx{% endcodeasset %}

##### Running unit tests
To run the test, an instance of [haxe.unit.TestRunner](http://api.haxe.org/haxe/unit/TestRunner.html) has to be created. Add the [TestCase](http://api.haxe.org/haxe/unit/TestCase.html) using the `add` method and call `run` to start the test.

{% codeasset haxe %}assets/UnitTestRunner.hx{% endcodeasset %}

The result of the test looks like this:
```haxe 
Class: MyTestCase
.
OK 1 tests, 0 failed, 1 success
``` 

##### Test functions
The `haxe.unit.TestCase` class comes with three test functions.

* `assertEquals(a, b)` Succeeds if `a` and `b` are equal, where `a` is value tested and `b` is the expected value.
* `assertTrue(a)` Succeeds if `a` is `true`
* `assertFalse(a)` Succeeds if `a` is `false`

##### Setup and tear down

To run code before or after the test, override the functions `setup` and `tearDown` in the `TestCase`. 

* `setup` is called before each test runs.
* `tearDown` is called once after all tests are run.

{% codeasset haxe %}assets/UnitTestSetup.hx{% endcodeasset %}

##### Comparing Complex Objects

With complex objects it can be difficult to generate expected values to compare to the actual ones. It can also be a problem that `assertEquals` doesn't do a deep comparison. One way around these issues is to use a string as the expected value and compare it to the actual value converted to a string using `Std.string`. Below is a trivial example using an array.

```haxe 
public function testArray() {
  var actual = [1,2,3];
  assertEquals("[1, 2, 3]", Std.string(actual));
}
``` 

See the [haxe.unit](http://api.haxe.org/haxe/unit/) package on the API documentation for more details.
