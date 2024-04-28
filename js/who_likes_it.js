function likes(name) {
// Methode 1:
// if(name.length == 1) {
// return `${name[0]}, Likes This`;
// } else if (name.length == 2) {
//   return `${name.map(el => el).join(' and ')}, Likes This`;
// } else if(name.length == 3) {
// return `${name[0]}, ${name.slice(1).join(' and ')} Likes This`;
// } else if(name.length > 3) {
// return `${name[0]}, ${name[1]} and ${name.slice(2).length} Others Likes This`;
// } else {
//     return "No One Likes This";
// }

// Methode 2:
// return name.length == 1
//   ? `${name[0]}, Likes This`
//   : name.length == 2
//   ? `${name.map((el) => el).join(" and ")}, Likes This`
//   : name.length == 3
//   ? `${name[0]}, ${name.slice(1).join(" and ")} Likes This`
//   : name.length > 3
//   ? `${name[0]}, ${name[1]} and ${name.slice(2).length} Others Likes This`
//   : "No One Likes This";

// Methode 3:
switch(name.length) {
    case 1:
        return `${name[0]}, Likes This`;
    break;
    case 2:
        return `${name.map((el) => el).join(" and ")}, Likes This`;
    break;
    case 3:
        return `${name[0]}, ${name.slice(1).join(" and ")} Likes This`;
    break;
    case 4:
        return `${name[0]}, ${name[1]} and ${name.slice(2).length} Others Likes This`;
    break;
    default:
        return "no one likes this";
}
}

console.log(likes(["peter", "ahmed", "kimo", "mike"]));