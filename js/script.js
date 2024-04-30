// Copyright (c) 2024 Fetuha. All rights reserved
//
// Created by: Fetuha
// Created on: April 2024
// This file contains the JS functions for index.html

"use strict"

function myButtonClicked() {
  // input
  const TAX = 1.13
  const COST_SMALL = 1
  const COST_LARGE = 1.75
  const COST_BACON = 7.0
  const COST_HAM = 5.0
  const COST_CHICKEN = 5.5
  const COST_TURKEY = 6.0
  let costSize = 0
  let cost = 0
  let price = 0

  // input
  const meat = parseInt(document.getElementById("meat").value)
  const size = parseInt(document.getElementById("size").value)

  // process

  if (size == 6) {
    costSize = COST_SMALL
  } else {
    costSize = COST_LARGE
  }

  if (meat == 1) {
    cost = COST_BACON
  } else if (meat == 2) {
    cost = COST_HAM
  } else if (meat == 3) {
    cost = COST_CHICKEN
  } else {
    cost = COST_TURKEY
  }

  price = costSize * cost * TAX

  // output
  document.getElementById("answer").innerHTML =
    "Your total comes to $" +
    price.toFixed(2) +
    ". Thank you!"
}
