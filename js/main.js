const form = document.getElementById("form")


  

form.onsubmit = (e) => {
  e.preventDefault();
  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const emailUser = document.getElementById("emailAdress")
  const passUser = document.getElementById("password")
  const errorName = document.getElementById("errorName");
  const errorLastName = document.getElementById("errorLastName");
  const errorMailUser = document.getElementById("errorMail");
  const errorPassUser = document.getElementById("errorPass");


  const disableFormFields = () => {
    // Name Input
    errorName.innerHTML = `first name cannot be empty`;
    firstName.classList.add("imgBG");
    firstName.removeAttribute("placeholder");
    firstName.setAttribute("disabled", "disabled")
    // Last Name Input
    errorLastName.innerHTML = `last name cannot be empty`;
    lastName.classList.add("imgBG");
    lastName.removeAttribute("placeholder");
    lastName.setAttribute("disabled", "disabled");
    // email Input
    errorMailUser.innerHTML = `Looks like this is not an email`;
    emailUser.classList.add("imgBG");
    emailUser.removeAttribute("placeholder");
    emailUser.setAttribute("disabled", "disabled");
    // pass input
    errorPassUser.innerHTML = `Password cannot be empty`;
    passUser.classList.add("imgBG");
    passUser.removeAttribute("placeholder");
    passUser.setAttribute("disabled", "disabled");

    // let formFields = document.getElementById("form").elements
    // let arrayFields = Array.from(formFields)
    // console.log(arrayFields.pop());
    // arrayFields.forEach((input) => {
      
    //   console.log(input.type); 
    // })
  }
  // when the user don't complete all fields
  (firstName.value == "" && lastName.value == "" && emailUser.value == "" && passUser.value == "") ? 
  disableFormFields() : console.log('some of fields are completed');

// if the user don't complete some field
  if (firstName.value == "") {
    errorName.innerHTML = `first name cannot be empty`;
    firstName.classList.add("imgBG");
    firstName.removeAttribute("placeholder");
    firstName.setAttribute("disabled", "disabled");
  } else if (lastName.value == "") {
    errorLastName.innerHTML = `last name cannot be empty`;
    lastName.classList.add("imgBG");
    lastName.removeAttribute("placeholder");
    lastName.setAttribute("disabled", "disabled");
  } else if (emailUser.value == "") {
    errorMailUser.innerHTML = `Looks like this is not an email`;
    emailUser.classList.add("imgBG");
    emailUser.removeAttribute("placeholder");
    emailUser.setAttribute("disabled", "disabled");
  } else if (passUser.value == "") {
    errorPassUser.innerHTML = `Password cannot be empty`;
    passUser.classList.add("imgBG");
    passUser.removeAttribute("placeholder");
    passUser.setAttribute("disabled", "disabled");
  } else {
    errorName.innerHTML = ``;
    alert("Gracias por completar tus datos")
}
} 
