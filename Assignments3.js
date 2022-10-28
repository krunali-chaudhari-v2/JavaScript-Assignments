function validation() {
  var FirstName = document.getElementById("FirstName").value;
  var LastName = document.getElementById("LastName").value;
  var Email = document.getElementById("Email").value;
  var Phone = document.getElementById("Phone").value;

  if (FirstName == "") {
    document.getElementById("Fname").innerHTML = "**please enter first name**";
    return false;
  }
  if (FirstName.length < 2 || FirstName.length > 20) {
    document.getElementById("Fname").innerHTML =
      "**first name length must be between 2 to 20**";
    return false;
  }
  if (!isNaN(FirstName)) {
    document.getElementById("Fname").innerHTML =
      "**only characters are allowed**";
    return false;
  } else {
    document.getElementById("Fname").innerHTML = "";
  }

  if (LastName == "") {
    document.getElementById("Lname").innerHTML = "**please enter last name**";
    return false;
  }
  if (LastName.length < 2 || LastName.length > 20) {
    document.getElementById("Lname").innerHTML =
      "**last name length must be between 2 to 20**";
    return false;
  }
  if (!isNaN(LastName)) {
    document.getElementById("Lname").innerHTML =
      "**only characters are allowed**";
    return false;
  } else {
    document.getElementById("Lname").innerHTML = "";
  }

  if (Email == "") {
    document.getElementById("Emaill").innerHTML = "**Please Enter Email**";
    return false;
  }
  if (Email.indexOf("@") <= 0) {
    document.getElementById("Emaill").innerHTML = "**Invalid Position of @**";
    return false;
  }
  if (
    Email.charAt(Email.length - 4) != "." &&
    Email.charAt(Email.length - 3) != "."
  ) {
    document.getElementById("Emaill").innerHTML = "**Invalid Position of .**";
  } else {
    document.getElementById("Emaill").innerHTML = "";
  }

  if (Phone == "") {
    document.getElementById("Phones").innerHTML = "**Please Enter Phone No**";
    return false;
  }
  if (isNaN(Phone)) {
    document.getElementById("Phones").innerHTML =
      "**please enter numbers only in the box**";
    return false;
  }

  if (Phone.length < 10 || Phone.length > 10) {
    document.getElementById("Phones").innerHTML =
      "**please enter 10 digit phone no in the box**";
    return false;
  } else {
    document.getElementById("Phones").innerHTML = "";
  }
}
