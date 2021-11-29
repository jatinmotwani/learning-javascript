var testArray = [2, 4, 6, 8, 3, 1, 5, 9, 8];
// console.log(testArray.fill("empty"));

const myNumber = [23, 24, 25, 55, 66, 77, 87, 98];

const result = myNumber.filter((number) => number % 2 === 0);
// console.log(result);

var users = ["Ted", "Tim", "Ton", "Sam", "Sor", "Sod"];

// Slice returns a copy of a range
// console.log(users.slice(1));

users.splice(3, 0, "Hi", "Bye");
console.log(users);
