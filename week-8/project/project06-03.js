"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-03

      Script to complete a form containing billing and shipping address information
      Author: Elliot Block
      Date:   3/2/25

      Filename: project06-03.js
*/
let useShip = document.getElementById("useShip");

useShip.addEventListener("click", copyShippingToBilling);

function copyShippingToBilling() {

      if (useShip.checked){
            document.getElementById("firstnameBill").value = document.getElementById("firstnameShip").value;
            document.getElementById("lastnameBill").value = document.getElementById("lastnameShip").value;
            document.getElementById("address1Bill").value = document.getElementById("address1Ship").value;
            document.getElementById("address2Bill").value = document.getElementById("address2Ship").value;
            document.getElementById("cityBill").value = document.getElementById("cityShip").value;
            document.getElementById("countryBill").value = document.getElementById("countryShip").value;
            document.getElementById("codeBill").value = document.getElementById("codeShip").value;
            document.getElementById("stateBill").value = document.getElementById("stateShip").value;
      }
}

let formElements = document.querySelectorAll("input[type='text']");

let fieldCount = formElements.length;

let errorBox = document.getElementById("errorBox");

console.log("Number of text fields:", fieldCount);
console.log("Error Body Element:", errorBox);

function showValidationError(evt){
      evt.preventDefault();

      errorBox.textContent = "Complete all highlighted fields";
}

for (let i = 0; i < fieldCount; i++){
      formElements[i].addEventListener("invalid", showValidationError);
}