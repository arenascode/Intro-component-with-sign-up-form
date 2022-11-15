const form = document.getElementById("form")
// form inputs 
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const emailUser = document.getElementById("emailAdress");
const passUser = document.getElementById("password");
const errorName = document.getElementById("errorName");
const errorLastName = document.getElementById("errorLastName");
const errorMailUser = document.getElementById("errorMail");
const errorPassUser = document.getElementById("errorPass");

firstName.oninput = function (e) {
  console.log(e);
  console.log(firstName.value);
  firstName.classList.remove("imgBG");
  errorName.innerHTML = ``;
}
lastName.oninput = function (e) {
  console.log(e);
  console.log(lastName.value);
  lastName.classList.remove("imgBG");
  errorLastName.innerHTML = ``;
};
emailUser.oninput = function (e) {
  console.log(e);
  console.log(emailUser.value);
  emailUser.classList.remove("imgBG");
  errorMailUser.innerHTML = ``;
};
passUser.oninput = function (e) {
  console.log(e);
  console.log(passUser.value);
  passUser.classList.remove("imgBG");
  errorPassUser.innerHTML = ``;
};
// const deleteErrors = (e) => {
//   console.log(firstName.value);
//   firstName.classList.remove("imgBG");
//   errorName.innerHTML = ``;
// };

form.onsubmit = (e) => {
  e.preventDefault();
  
  const disableFormFields = () => {
    // Name Input
    errorName.innerHTML = `first name cannot be empty`;
    errorName.classList.add('errorStyle');
    firstName.classList.add("imgBG");
    firstName.removeAttribute("placeholder");
    // Last Name Input
    errorLastName.innerHTML = `last name cannot be empty`;
    errorLastName.classList.add("errorStyle");
    lastName.classList.add("imgBG");
    lastName.removeAttribute("placeholder");
    // email Input
    errorMailUser.innerHTML = `Looks like this is not an email`;
    errorMailUser.classList.add("errorStyle");
    emailUser.classList.add("imgBG", "placeHolderErrorMail");
    emailUser.removeAttribute("placeholder");
    emailUser.setAttribute("placeholder", "email@example/com")
    // pass input
    errorPassUser.innerHTML = `Password cannot be empty`;
    errorPassUser.classList.add("errorStyle");
    passUser.classList.add("imgBG");
    passUser.removeAttribute("placeholder");


  }

  // when the user don't complete all fields
  (firstName.value == "" && lastName.value == "" && emailUser.value == "" && passUser.value == "") ? 
  disableFormFields() : console.log('some of fields are completed');

// if the user don't complete some field
  if (firstName.value == "") {
    errorName.innerHTML = `first name cannot be empty`;
    firstName.classList.add("imgBG");
    firstName.removeAttribute("placeholder");
    firstName.onchange = function () {
      firstName.classList.remove("imgBG")
    }
  } else if (lastName.value == "") {
    errorLastName.innerHTML = `last name cannot be empty`;
    lastName.classList.add("imgBG");
    lastName.removeAttribute("placeholder");
  } else if (emailUser.value == "") {
    errorMailUser.innerHTML = `Looks like this is not an email`;
    emailUser.classList.add("imgBG");
    emailUser.removeAttribute("placeholder");
  } else if (passUser.value == "") {
    errorPassUser.innerHTML = `Password cannot be empty`;
    passUser.classList.add("imgBG");
    passUser.removeAttribute("placeholder");
  } else {
    form.reset()
    firstName.setAttribute("placeholder", "First Name")
    lastName.setAttribute("placeholder", "Last Name");
    emailUser.setAttribute("placeholder", "Email Address");
    firstName.setAttribute("placeholder", "Password");
    alert("thanks for your information")
}
} 
