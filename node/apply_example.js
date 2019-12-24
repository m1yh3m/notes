const sum = (a, b) => Array.from(arguments).reduce((a, i) => a + i, 0)
const first10 = Array(10).fill(0).map((v, i) => i)
const sumOfFirst10Digits = first10.apply(null, sum)
console.log(sumOfFirst10Digits)

