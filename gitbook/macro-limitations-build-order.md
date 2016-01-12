## 9.6.3 Build Order

The build order of types is unspecified and this extends to the execution order of [build-macros](macro-type-building.md). While certain rules can be determined, we strongly recommend to not rely on the execution order of build-macros. If type building requires multiple passes, this should be reflected directly in the macro code. In order to avoid multiple build-macro execution on the same type, state can be stored in static variables or added as [metadata](lf-metadata.md) to the type in question:

{% codeasset haxe %}assets/MacroBuildOrder.hx{% endcodeasset %}

With both interfaces `I1` and `I2` having `:autoBuild` metadata, the build macro is executed twice for class `C`. We guard against duplicate processing by adding a custom `:processed` metadata to the class, which can be checked during the second macro execution.
