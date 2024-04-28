function digPow(n, p) {
// Mathode 1:
// let splitedN = String(n);
// let result = 0;
// for (let i = 0; i < splitedN.length; i++) {
//     result += Math.pow(+splitedN[i], i+p);
// }
// let k = result / n;
// return Number.isInteger(k) ? k : -1;

// Methode 2:
let result =  String(n).split('')
                .map((el, i) => Math.pow(Number(el), i+p))
                .reduce((acc, curr) => acc + curr);
let k = result / n;
return Number.isInteger(k) ? k : -1;
}

console.log(digPow(46288, 3))