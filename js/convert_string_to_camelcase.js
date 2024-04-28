function toCamelcase(str) {
// methode 1:
// let strArr = str.replaceAll("_", " ").match(/\w+/gi)[0];
// let strSplited = str.replaceAll("_", " ")
//                     .match(/\w+/ig)
//                     .slice(1)
//                     .map(el => el.slice(0,1).toUpperCase() + el.slice(1).toLowerCase())
//                     .join('');
// return strArr + strSplited;

// Methode 2:
let firstElInStr = str.replaceAll("_", " ").replaceAll("-", " ").split(" ")[0];
let strSplited = str.replaceAll("_", " ").replaceAll("-", " ").split(" ").slice(1);
let letterUpper = "";
for (let i = 0; i < strSplited.length; i++) {
  letterUpper += strSplited[i][0].toUpperCase() + strSplited[i].slice(1).toLowerCase();
}
return firstElInStr + letterUpper;
}

console.log(toCamelcase("this-is_fIRST"))