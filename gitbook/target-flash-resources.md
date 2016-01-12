## 12.2.2 Embedding resources

Embedding resources is different in Haxe compared to ActionScript 3. Instead of using `[embed]` (AS3-metadata) use [Flash specific compiler metadata](target-flash-metadata.md) like `@:bitmap`, `@:font`, `@:sound` or `@:file`.

```haxe
import flash.Lib;
import flash.display.BitmapData;
import flash.display.Bitmap;

class Main {
  public static function main() {
    var img = new Bitmap( new MyBitmapData(0, 0) );
    Lib.current.addChild(img);
  }
}

@:bitmap("relative/path/to/myfile.png") 
class MyBitmapData extends BitmapData { }
```
