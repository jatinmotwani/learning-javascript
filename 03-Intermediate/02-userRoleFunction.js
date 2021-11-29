/*
Define a function that can answer the role of a user.
A user can be on following roles: 
admin - with all access 
subadmin - with access to create/delete courses 
testprep - with access to create/delete tests
user - consumer all content
other - trial user

Input : getUserRole(name, role)
*/

var getUserRole = function (name, role) {
  switch (role) {
    case "admin":
      return `${name} is admin with all access`;
      break; // this is not necessary
    case "subadmin":
      return `${name} is subadmin with access to create and delete courses`;
    case "testprep":
      return `${name} is testprep with access to create and delete tests`;
    case "user":
      return `${name} is user with access to consume content`;
    default:
      return `${name} is trial user with no access`;
  }
};

console.log(getUserRole("Jatin", "admin"));

var getRole = getUserRole("Samy", "user");

console.log(getRole);
