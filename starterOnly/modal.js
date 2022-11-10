function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalClose = document.querySelector(".close");


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Close modal event
modalClose.addEventListener("click", closeModal);

// launch modal form
function launchModal() {
  clearForm();
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// validate form content
function validate() {
  isOk = true;
  // validate lastname & firstname
  const last = document.getElementById("last");
  const first = document.getElementById("first");
  if (! checkLength(last.value, 2)) {
    isOk = false;
    showErrorMessage(last);
  }
  if (! checkLength(first.value, 2)) {
    isOk = false;
    showErrorMessage(first);
  }
  // validate email
  const email = document.getElementById("email");
  if (! checkEmail(email.value)) {
    isOk = false;
    showErrorMessage(email);
  }
  // validate birthdate
  const birth = document.getElementById("birthdate");
  if (! checkBirthdate(birth.value)) {
    isOk = false;
    showErrorMessage(birth);
  }
  // validate quantity
  const qty = document.getElementById("quantity");
  if (! checkQuantity) {
    isOk = false;
    showErrorMessage(qty,);
  }
  // validate radio button
  const radio = document.querySelector("input[type='radio']:selected");
  if (radio === null) {
    isOk = false;
    showErrorMessage(radio);
  }
  // validate acceptance
  const accept = document.getElementById("checkbox1");
  if (! accept.checked) {
    isOk = false;
    showErrorMessage(accept);
  }
  return isOk;
}

// check string length against min length
function checkLength(string, minLength) {
  if (isNull(string) || string === undefined || string.length < minLength) {
    return false;
  }
  return true;
}

// check if email is valid email address
function checkEmail(email) {
  // Simple regexp, but enough
  const pattern = /^[\w._%+-]+@[\w.-]+\.[A-Za-z]{2,}$/
  return pattern.test(email);
}

// check if birthdate is present
function checkBirthdate(birth) {
  return (! isNull(birth) && birth !== "");
}

// chek if quantity is present
function checkQuantity(qty) {
  return Number.isInteger(parseInt(qty.value));
}

// show  error message associated with element
function showErrorMessage(element) {
  const div = element.closest(".formData");
  if (div) {
    div.dataset["data-error"] = true;
  }
}

// clear error message associated with element
function clearErrorMessage(element) {
  const div = element.closest(".formData");
  if (div) {
    delete div.dataset["data-error"];
  }
}

// clear all error messages
function clearAllErrorMessages() {
  document.querySelectorAll("formData")
    .forEach(elt => clearErrorMessage(elt));
}

// clear form
function clearForm() {
  document.querySelector("form").reset();
  clearAllErrorMessages();
}

