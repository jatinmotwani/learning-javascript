var countries = ["India", "USA", "Japan", "Russia"];

var states = new Array("Rajasthan", "Delhi", "Mumbai", "Assam", "Gujarat");
// console.log(states[4]);
// console.log(states.length);
states[0] = "Punjab";
// console.log(states);

var user = ["jatin", "jatin@gmail.com", 3, 34, true];
// console.log(user);
user.pop();
user.pop();
// console.log(user);
user.unshift("NEW VALUE");
// console.log(user);
user.shift();
console.log(user);

console.log(user.indexOf("newyy"));

console.log(Array.from("jatin"));
