function narcisistic(value) {
// Methode 1:
// return (String(value)
//   .split("")
//   .map((el) => Math.pow(el, String(value).length))
//   .reduce((acc, curr) => acc + curr)) == value 
//   ? true
//   : false

// Methode 2:
let valueStr = value.toString().split('').map(el => Number(el));
let sum = 0;
let valueLength = valueStr.length;
for (const num of valueStr) {
    sum += Math.pow(num, valueLength);
}
return sum == value;
}

console.log(narcisistic(153));