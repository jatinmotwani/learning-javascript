// Show user a signout button if he is authenticated,
// other wise show him option to Logon/Signup

var authenticated = false;

// if (authenticated) {
//   console.log("Show signout button");
// } else {
//   console.log("Show login option");
// }

authenticated
  ? console.log("Show signout button")
  : console.log("Show login option");
