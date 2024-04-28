function spinnigWord(str) {
// Methode 1:
// let strArr = str.split(' ');
// let result = "";
// for (let i = 0; i < strArr.length; i++) {
//   result += strArr[i].length >= 5 
//             ? strArr[i].split("").reverse().join('') + " " 
//             : strArr[i]+ " ";
// }
// return result;

// Methode 2:
// return str
//   .split(" ")
//   .map((el) =>
//     el.length >= 5 
//     ? el.split("").reverse().join("") 
//     : el)
//   .join(" ");
}

console.log(spinnigWord('this welcome is testing'));