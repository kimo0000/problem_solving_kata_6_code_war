function latestClock(a,b,c,d) {
// Methode 1:
// let sortingArr = [a,b,c,d].sort((a,b) => b-a);
// let digitGreeterThenFive = sortingArr.filter(el => el > 5).length;
// function getMaxGigit(maxDigit) {
// for (let i = 0; i < sortingArr.length; i++) {
//   const currentDigit = sortingArr[i];
//   if(currentDigit <= maxDigit) {
//      delete sortingArr[i];
//      return currentDigit;
//   }
// }
// }

// let firstDigit = getMaxGigit(digitGreeterThenFive > 1 ? 1 : 2);
// let twoDigit = getMaxGigit(firstDigit === 2 ? 3 : 9);
// let thirdDigit = getMaxGigit(5);
// let fourthDigit = getMaxGigit(9);
// return `${firstDigit}${twoDigit}:${thirdDigit}${fourthDigit}`;

// Methode 2:
let arr = [a,b,c,d].sort((a,b) => b-a);
let lengthArr = arr.filter((el) => el > 5);
function getNum(maxDigit) {
   for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    console.log(current, maxDigit);
    if (current <= maxDigit) {
      delete arr[i];
      return current;
    }
   }
}

let first = getNum(lengthArr <= 1 ? 1 : 2);
let second = getNum(first == 2 ? 3 : 9);
let third = getNum(5);
let fourth = getNum(9);
return `${first}${second}:${third}${fourth}`;
}

console.log(latestClock(2,3,5,8));