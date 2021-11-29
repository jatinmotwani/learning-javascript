var name = "Jatin";
console.log("Line number 2", name);

function sayName() {
  var name = "Mr. J";
  console.log("Line number 5", name);

  function sayNameTwo() {
    var name = "Test";
    console.log("Line number 9", name);
  }
  sayNameTwo();
}

sayName();
