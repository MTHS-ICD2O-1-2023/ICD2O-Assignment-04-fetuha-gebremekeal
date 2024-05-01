// Copyright (c) 2024 Fetuha All rights reserved
//
// Created by: Fetuha
// Created on: Mar 2024
// This file contains the JS functions for index.html

function makeReceiptClicked() {
  const choiceSML = (document.getElementById("option-small").checked)
  const choiceBacon = (document.getElementById("checkbox-bacon").checked)
  const choiceChicken = (document.getElementById("checkbox-chicken").checked)
  const choiceSauce = (document.getElementById("checkbox-sauce").checked)
  let total = 10
  if (choiceSML == true) {
    document.getElementById("answer").innerHTML = "Small Poutine $10.00 <br /><br />"
  } else {
    document.getElementById("answer").innerHTML = "Large Poutine $15.00 <br /><br />"
  }
  if (choiceBacon == true) {
    document.getElementById("answer").innerHTML += "Bacon $3.00 <br />"
    total += 3
  } 
  if (choiceChicken == true) {
    document.getElementById("answer").innerHTML += "Chicken $2.00 <br />"
    total += 2
  } 
  if (choiceSauce == true) {
    document.getElementById("answer").innerHTML += "Sauce $1.00 <br />"
    total += 1
  }
  document.getElementById("answer").innerHTML += "<br /> Subtotal = $" + total.toFixed(2)
  total *= 1.13
  document.getElementById("answer").innerHTML += "<br /><br /> HST = 13% <br /><br /> Total = $" + total.toFixed(2)
}
