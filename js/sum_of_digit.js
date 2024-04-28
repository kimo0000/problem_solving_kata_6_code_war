function digitalRoot(nums) {
// Methode 1:
// let strNum = nums.toString();
// let sum = 0;
// for (const num of strNum) {
//   sum += +num;
// }
// return String(sum).split("").length > 1
//        ? String(sum).split('').map(el => +el).reduce((acc, curr) => acc + curr)
//        : sum;

// Methode 2:
let strNum = nums.toString();
sum = 0;
for (const num of strNum) {
    sum += +num;
}
let final = sum < 10 ? sum : String(sum).split('').map(el => +el).reduce((acc, curr) => acc + curr);
return final;
}

console.log(digitalRoot(812));