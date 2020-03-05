# Iterator

Iterator is an object that contains one function named `next` which returns `{value, done}`.

It can be obtained by calling `[Symbol.iterator]()` on an iterable.

```javascript
// https://jsfiddle.net/jshacker/z4tL85qw/

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
var iterator = ios[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

// {value: "x", done: false}
// {value: "y", done: false}
// {value: "z", done: false}
// {value: undefined, done: true}
```

## Arrays in JS are iterables

```javascript
var vowels = ["a", "e", "i", "o", "u"];
const iterator = vowels[Symbol.iterator]();

let value, done;
do {
  next = iterator.next();
  value = next.value;
  done = next.done;
  console.log(value, done);
} while (!done);

// a false
// e false
// i false
// o false
// u false
// undefined true
```
