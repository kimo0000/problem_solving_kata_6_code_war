function orders(words) {
return words.split(' ').sort((a,b) => {
    let numA = +a.match(/\d/ig);
    let numB = +b.match(/\d/ig);
    console.log(numA, numB);
return (numA - numB);
}).join(' ');
}
console.log(orders("is2 Thi1s 3a T4est"));