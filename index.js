let length = document.getElementById("length-output");
let volume = document.getElementById("volume-output");
let mass = document.getElementById("mass-output");
let inputValue = document.getElementById("input-box");
let inputBtn = document.getElementById("input-btn");
let outputError = document.getElementById("output-error");

inputBtn.addEventListener("click", function() {
  console.log(typeof inputValue.value);
  if (inputValue.value > 0) {
    outputError.innerHTML = "";
    length.innerHTML = `
    ${inputValue.value} meters = ${(inputValue.value*3.28084).toFixed(3)} feet | ${inputValue.value} feet = ${(inputValue.value * 0.3048).toFixed(3)} meters
    `;
    volume.innerHTML = `
      ${inputValue.value} liters = ${(inputValue.value* 0.264172).toFixed(3)} gallons | ${inputValue.value} gallons = ${(inputValue.value * 3.78541).toFixed(3)} liters
    `;
    mass.innerHTML = `
      ${inputValue.value} kilos = ${(inputValue.value* 2.20462).toFixed(3)} pounds | ${inputValue.value} pounds = ${(inputValue.value * 0.453592).toFixed(3)} kilos
    `;
  } else {
    outputError.innerHTML = "<h2>Error occured. Invalid format. Please only use numbers greater than zero.</h2>";
  }
})