const uniqueInOrder = (iterable) => {
// Methode 1:
// let final = [];
// for (let i = 0; i < iterable.length; i++) {
//   console.log(iterable[i], iterable[i+1]);
//   if(iterable[i] != iterable[i+1]) final.push(iterable[i]);
// }
// return final;

// Methode 2:
if(typeof iterable == "object") {

let final = iterable.map((el, i, arr) => {
    console.log(arr[i+1])
    if(arr[i] != arr[i+1]) return iterable[i];
  })
return final.join('').split('').map(el => +el);
} else {
let final = iterable.split('').map((el, i, arr) => {
  console.log(arr[i + 1]);
  if (arr[i] != arr[i + 1]) return iterable[i];
});
return final
  .join("")
  .split("")
  .map((el) => el);
}
}

console.log(uniqueInOrder("AAABBBCcDDBB"));