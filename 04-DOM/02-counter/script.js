var counter = document.querySelector(".counter");
var followers = document.querySelector(".followers");
var counter2 = document.getElementById("counter");
var counter3 = document.getElementsByClassName("counter");

console.log(counter);
console.log(counter2);
console.log(counter3);

let count = 1;

setInterval(() => {
  if (count < 1000) {
    count++;
    counter.innerText = count;
  }
}, 1);

setTimeout(() => {
  followers.innerText = "Followers on Instagram";
}, 5000);
