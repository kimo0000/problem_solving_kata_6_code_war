function findOutlier(nums) {
  // Methode 1:
  let evenNum = [];
  let oddNum = [];
  for (let i = 0; i < nums.length; i++) {
      nums[i] % 2 === 0 ? evenNum.push(nums[i]) : oddNum.push(nums[i]);
  }
  return oddNum.length < evenNum.length ? +oddNum : +evenNum;

  // Methode 2:
//   let evenNum = [];
//   let oddNum = [];
//   nums.map(el => el % 2 === 0 ? evenNum.push(el) : oddNum.push(el));
//   let result = oddNum.length < evenNum.length ? +oddNum : +evenNum;
//   return result;
}

console.log(findOutlier([2,4,5]));