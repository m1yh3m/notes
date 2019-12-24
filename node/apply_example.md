# Apply example

## with sum function

```javascript

function sum() { Array.from(arguments).reduce((a, i) => a + i, )) }
function first10Digits() { Array(10).fill)(0).map((v, i) => i) }
console.log(`sum of ${first10Digits()} is ${sum.apply(null, first10Digits())}`)

```

