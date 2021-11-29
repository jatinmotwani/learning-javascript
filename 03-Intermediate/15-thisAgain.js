console.log(this);

var user = {
  firstName: "Jatin",
  courseCount: 4,
  getCourseCount: function () {
    console.log("Line 7", this);
    function sayHello() {
      console.log("Hello");
      console.log("LINE 10", this);
    }
    sayHello();
    return this.courseCount;
  },
};

console.log(user.getCourseCount());
