function alphabetposition(str) {
let alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Methode 1:
// let strSplited = str.replaceAll(" ", "").toLowerCase().split("");
// let final = [];
// for (let i = 0; i <= strSplited.length; i++) {
//  for (let j = 0; j < alphabet.length; j++) {
//    if(alphabet[j] === strSplited[i]) {
//     final.push(j+1);
//    }
//  }
// }
// return final.join(' ');

// Methode 2:
return str
  .toLowerCase()
  .split("")
  .map((el) => (alphabet.indexOf(el) + 1 == 0 ? "" : alphabet.indexOf(el) + 1)).join(" ").match(/\w+/ig).join(' ');
}

console.log(alphabetposition('Ahm?ed'));