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

/**
 * launch modal form
 */
function launchModal() {
  clearForm();
  modalbg.style.display = "block";
}

/**
 * close modal form
 */
function closeModal() {
  modalbg.style.display = "none";
}

/**
 * validate form content. Called in HTML form tag
 * @returns true if form is correct, or false
 */
function validate() {
  clearAllErrorMessages();
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
  if (! checkQuantity(qty.value)) {
    isOk = false;
    showErrorMessage(qty,);
  }
  // validate radio button
  const radio = document.querySelector("input[type='radio']:checked");
  if (radio === null) {
    isOk = false;
    // Warning! radio is null, must find a radio button to give to function
    showErrorMessage(document.querySelector("input[type='radio']"));
  }
  // validate acceptance
  const accept = document.getElementById("checkbox1");
  if (! accept.checked) {
    isOk = false;
    showErrorMessage(accept);
  }
  return isOk;
}

/**
 * check string length against min length
 * @param {String} str string to check against minLength
 * @param {int} minLength minimum acceptable length for str
 * @returns true if str matches minLength, or false
 */
function checkLength(str, minLength) {
  if (str === null || str === undefined ||  str.length < minLength) {
    return false;
  }
  return true;
}

/**
 * check if email is valid email address
 * @param {String} email string to check
 * @returns true if email is valid email address
 */
function checkEmail(email) {
  // Simple regexp, but enough
  const pattern = /^[\w._%+-]+@[\w.-]+\.[A-Za-z]{2,}$/
  return pattern.test(email);
}

/**
 * check if birthdate is present
 * @param {String} birth birthdate value
 * @returns true if birthdate exists, or false
 */
function checkBirthdate(birth) {
  return (birth !== null && birth !== undefined && birth !== "");
}

/**
 * chek if quantity is valid
 * @param {*} qty quantity to check
 * @returns true if qty is between 0 and 99
 */
function checkQuantity(qty) {
  const value = parseInt(qty);
  return Number.isInteger(value) ? (value >= 0 && value <= 99) : false;
}

/**
 * show  error message associated with element
 * @param {HTMLElement} element HTMLElement in error
 * @returns undefined if element is not given
 */
function showErrorMessage(element) {
  if (! element) return;
  const div = element.closest(".formData");
  if (div) {
    div.dataset.errorVisible = true;
  }
}

/**
 * clear error message associated with element
 * @param {HTMLElement} element element in error
 */
function clearErrorMessage(element) {
  const div = element.closest(".formData");
  if (div) {
    delete div.dataset.errorVisible;
  }
}

/**
 * clear all error messages
 */
function clearAllErrorMessages() {
  document.querySelectorAll(".formData")
    .forEach(elt => clearErrorMessage(elt));
}

/**
 * reset form and clear all error messages
 */
function clearForm() {
  document.querySelector("form").reset();
  clearAllErrorMessages();
}

