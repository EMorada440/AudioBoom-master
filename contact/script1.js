/*
  Eugene Morada
  Date: 9/20/17
  Filename: script1.js

*/

"use strict";

var formValidity = true;

// ELM 9/21/17 - Lets validation to turn off
function validateForm(evt) {

  if (evt.preventDefault) {
    evt.preventDefault();
  } else {
    evt.returnValue = false;
  }
  formValidity = true;
  customText();
  selectStates();

  validateRequired(); // ELM 9/21/17 - This will require validation in order to move on

  if (formValidity === true) {
    document.getElementById("errorText").innerHTML = "";
    document.getElementsByTagName("form")[0].submit();

  }
  else {
    document.getElementById("errorText").innerHTML = "Please fill out the missing fields";
    document.getElementById("errorText").style.display = "block";

  }
}
function validateAddress(fieldsetId) {
  var inputElements = document.getElementsByTagName("select");

  try {
    currentElement = document.getElementsByTagName("select");
    if (currentElement.selectedIndex === -1) { // ELM 9/5/17 = error condition
      currentElement.style.border = "1px solid red";
      fieldsetValidity = false;
    }
    // ELM 9/6/17 - Not error condition
    else {
      currentElement.style.border - "";
    }

    // ELM 9/5/17 - Handles everything that is not valid
    if (fieldsetValidity === false) {
      formValidity = false;
      if (fieldsetId === "billingAddress") {
        throw "Please complete all billing address information";
      }
      else {
        throw "Please complete all delivery address information"
      }
    }
    else {
      errorDiv.style.display = "none";
      errorDiv.innerHTML = "";
    }
  }
  catch (msg){
    errorDiv.style.display = "block";
    errorDiv.innerHTML = msg;
    formValidity = false;
  }
}

// ELM 9/21/17 - This will do all validation process
function validateRequired () {
  var inputs = document.getElementsByTagName("input");
  var errorMessage = document.getElementById("errorText");
  var fieldsetValidity = true;
  var numElements = inputs.length;
  var currentElement;

  try {
    for (var i = 0; i < numElements; i++) {
      currentElement = inputs[i];
      if (currentElement.value === "") { // ELM 9/21/17 - This will handle if the input is not filled
        currentElement.style.border = "1px solid red"; // ELM 9/21/17 - Will present red input fields if it is not filled
        fieldsetValidity = false;
      } else {
        currentElement.style.border = ""; // ELM 9/21/17 - This is for correct information
      }
  }
  if (fieldsetValidity === false) {
    throw "Please complete all information"; // ELM 9/21/17 - Will tell the user to fill out the missing fields
  }

  else {
    errorMessage.style.display = "none";
    errorMessage.innerHTML = "";
  }
}

  catch (msg) {
    errorMessage.style.display = "block";
    errorMessage.innerHTML = msg;
    formValidity = false;
  }
}

function autoCheckCustom() {
  var messageBox = document.getElementById("customText");
  if (messageBox.value !== "" && messageBox.value !== messageBox.placeholder) { // ELM 9/22/17 - If there is user data, check the box
    document.getElementById("custom").checked = "checked";
  }
  else { // ELM 8/30/17 - If no  user data, uncheck the box
    document.getElementById("custom").checked = "";
  }
}

function selectStates () {
  var inputs = document.getElementById("delivState");
  var errorMessage = document.getElementById("errorText");
  var fieldsetValidity = true;
  var numElements = inputs.length;
  var currentElement;

  try {
    // for (var i = 0; i < numElements; i++) {
      currentElement = inputs;
      if (currentElement.selectedIndex === 0) { // ELM 9/21/17 - This will handle if the input is not filled
        currentElement.style.border = "1px solid red"; // ELM 9/21/17 - Will present red input fields if it is not filled
        fieldsetValidity = false;
      } else {
        currentElement.style.border = ""; // ELM 9/21/17 - This is for correct information
      }
  // }
  currentElement = document.getElementById("delivState");
  if (currentElement.selectedIndex === -1) { // ELM 9/5/17 = error condition
    currentElement.style.border = "1px solid red";
    fieldsetValidity = false;
  }

  else {
    errorMessage.style.display = "none";
    errorMessage.innerHTML = "";
  }
}

  catch (msg) {
    errorMessage.style.display = "block";
    errorMessage.innerHTML = msg;
    formValidity = false;
  }
}

function customText () {
  var inputs = document.getElementsByTagName("textarea");
  var errorMessage = document.getElementById("errorText");
  var fieldsetValidity = true;
  var numElements = inputs.length;
  var currentElement;

  try {
    for (var i = 0; i < numElements; i++) {
      currentElement = inputs[i];
      if (currentElement.value === "") { // ELM 9/21/17 - This will handle if the input is not filled
        currentElement.style.border = "1px solid red"; // ELM 9/21/17 - Will present red input fields if it is not filled
        fieldsetValidity = false;
      } else {
        currentElement.style.border = ""; // ELM 9/21/17 - This is for correct information
      }
  }
  if (fieldsetValidity === false) {
    throw "Please complete all information"; // ELM 9/21/17 - Will tell the user to fill out the missing fields
  }

  else {
    errorMessage.style.display = "none";
    errorMessage.innerHTML = "";
  }
}

  catch (msg) {
    errorMessage.style.display = "block";
    errorMessage.innerHTML = msg;
    formValidity = false;
  }
}

function createEventListeners() {
  var messageBox = document.getElementById("customText");
  if (messageBox.addEventListener) {
    messageBox.addEventListener("change", autoCheckCustom, false); // ELM 9/22/17 - Make it flexible for browsers
  }
  else if (messageBox.attachEvent) {
    messageBox.attachEvent("onchange", autoCheckCustom);
  }

  var form = document.getElementsByTagName("form")[0];
  if (form.addEventListener) {

    form.addEventListener("submit", validateForm, false); // ELM 9/22/17 - Make it flexible for browsers Chrome
  } else if (form.attachEvent) {
    form.attachEvent("onsubmit", validateForm); // ELM 9/22/17 - Make it flexible for browsers Internet Explorer

  }
}

if (window.addEventListener) {
  window.addEventListener("load", createEventListeners, false); // ELM 9/22/17 - Make it flexible for browsers Chrome
} else if (window.attachEvent) {
  window.attachEvent("onload", createEventListeners); // ELM 9/22/17 - Make it flexible for browsers Internet Explorer
}
