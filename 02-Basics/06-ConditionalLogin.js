// Allow user to access if he is:
// logged in from email
// logged in from Google
// logged in from facebook

var email = true;
var meta = false;
var google = false;

if (email || meta || google) {
  console.log("Login Success");
}
