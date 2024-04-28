function findOdd(num) {
// Methode 1
// let result = 0;
// let final = [];
// let obj = {};
// for (let i = 0; i < num.length; i++) {
//    if(num[i] in obj) {
//       obj[num[i]] += 1;
//    } else {
//     obj[num[i]] = 1;
//    }
// }
// for (const key in obj) {
//     if (key in obj) {
//         result = obj[key] % 2 === 0 ? "" : key;
//         final.push(result);
//     }
// }
// return final.filter((el, i, arr) => el == Math.max(...arr)).join('');

// Methode 2:
let map = new Map();
for (const item of num) {
    map.set(item, (map.get(item) || 0)+1);
}

for (const [key, value] of map.entries()) {
    if (value % 2 != 0) {
        return key;
    }
}
}

console.log(findOdd([1,1,5,4,4,4,5,4,9]));