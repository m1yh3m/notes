# Asynchronous Iteration

```javascript
function resolveAfter4Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 4000);
  });
}
function resolveAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}
function resolveAfter10Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 10000);
  });
}

var asyncData = [
  resolveAfter2Seconds(10),
  resolveAfter2Seconds(20),
  resolveAfter4Seconds(30),
  resolveAfter10Seconds(9030)
];
for (x of asyncData) {
  console.log(x);
}

// Promise {<pending>}
// Promise {<pending>}
// Promise {<pending>}
// Promise {<pending>}

(async function() {
  for await (var x of asyncData) {
    console.log(x);
  }
})();

// 10
// 20
// 30
// 9030

```
