var user = {
  firstName: "Jatin",
  lastName: "Motwani",
  role: "Admin",
  loginCount: 32,
  facebookSignedIn: true,
  courseList: [],
  buyCourse: function (courseName) {
    this.courseList.push(courseName);
  },
  getCourseCount: function () {
    return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`;
  },
};

console.log(user.getCourseCount());
user.buyCourse("C++");
console.log(user.getCourseCount());
user.buyCourse("MERN");
console.log(user.getCourseCount());
user.buyCourse("Pro Backend Developer.");
console.log(user.getCourseCount());
