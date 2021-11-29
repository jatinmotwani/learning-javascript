// Create an application with following roles:
// admin - gets full access
// subadmin - gets access to create/delete courses
// testprep - gets access to create/delete tests
// user - gets access to consumer content

var user = "admin";

switch (user) {
  case "admin":
    console.log("You get full access");
    break;

  case "subadmin":
    console.log("You can create or delete courses");
    break;

  case "testprep":
    console.log("You can create or delete tests");
    break;

  case "user":
    console.log("You get access to consume content");
    break;

  default:
    console.log("Trial user");
    break;
}
