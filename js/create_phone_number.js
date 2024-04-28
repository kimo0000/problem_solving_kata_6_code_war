const createPhoneNumber = (num) => {
// Methode 1:
// return `(${num.slice(0,3).join("")}) ${num.slice(3,6).join('')}-${num.slice(-4).join("")}`;

// Methode 2:
let one = "(" + num.join("").substr(0, 3) + ")";
let two = num.join("").substr(3, 3);
let three = num.join("").substr(6);
return one + " " + two + "-" + three
}

console.log(createPhoneNumber([1,2,3,4,5,6,7,8,9,0]));