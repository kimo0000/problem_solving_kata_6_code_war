function solutions(num) {
  if(num < 0) return 0;

  // Methode 1:
  // let finalArray = [];
  // for (let i = 1; i < num; i++) {
  //     Number.isInteger(i / 3) || Number.isInteger(i / 5) ? finalArray.push(i) : "";
  // }
  // return finalArray.reduce((acc, curr) => acc + curr);

  // Methode 2:
  // let finalArray = [];
  // for (let i = 1; i < num; i++) {
  //   i % 3 == 0 || i % 5 == 0 ? finalArray.push(i) : "";
  // }
  // return finalArray.reduce((acc, curr) => acc + curr);

  // Methode 3:
  // let sum = 0;
  // if (num < 0) return 0;
  // for (let i = 1; i < num; i++) {
  //   i % 3 == 0 || i % 5 == 0 ? sum += i : "";
  // }
  // return sum;

  // Methode 4:
  // let sum = 0;
  // let i = 0;
  // while (i < num) {
  //   i % 3 == 0 || i % 5 == 0 ? sum += i : "";
  //   i++;
  // }
  // return sum;

  // Methode 5:
  return Array.from(Array(num).keys())
    .slice(1)
    .filter((el) => el % 3 == 0 || el % 5 == 0)
    .reduce((acc, curr) => acc + curr);
}

console.log(solutions(10));