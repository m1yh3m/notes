# Iterables

An object that has [Symbol.iterator]().

```javascript
// https://jsfiddle.net/jshacker/bwnkv7q8/

class IterateOverString {
  constructor(name) {
    this.name = name;
  }
  [Symbol.iterator]() {
    let str = this.name.split("");
    let done = false;
    let value = "";
    return {
      next() {
        if (str.length > 0) {
          value = str.shift();
        } else {
          value = undefined;
          done = true;
        }
        return { value, done };
      }
    };
  }
}

var ios = new IterateOverString("xyz");
for (x of ios) {
  console.log(x);
}

// x
// y
// z
```

## Arrays in JS are iterables

```javascript
var vowels = ["a", "e", "i", "o", "u"];

for (var v of vowels) {
  console.log(v);
}
```
