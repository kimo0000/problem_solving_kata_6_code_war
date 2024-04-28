const arrayDiff = (a, b) => {
// Methode 1:
// return a.filter(el => !b.includes(el));

// Methode 2:
let newArr = [];
for (let i = 0; i < a.length; i++) {
    if(!b.includes(a[i])) newArr.push(a[i]);
}
return newArr;
}

console.log(arrayDiff([1,2,2,2,3], [2,1]));