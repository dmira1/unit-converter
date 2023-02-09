let length = document.getElementById("length-output");
let volume = document.getElementById("volume-output");
let mass = document.getElementById("mass-output");
let inputValue = document.getElementById("input-box").value;
let inputBtn = document.getElementById("input-btn");

inputBtn.addEventListener("click", function() { 
  if(inputValue != ""){
    length.innerHTML = `
      ${inputValue} meters = ${(inputValue* 3.281).toFixed(3)} feet | ${inputValue} feet = ${(inputValue / 0.305).toFixed(3)} meters
    `;
    volume.innerHTML = `
      ${inputValue} liters = ${(inputValue* 0.264).toFixed(3)} gallons | ${inputValue} gallons = ${(inputValue * 3.785).toFixed(3)} liters
    `;
    mass.innerHTML = `
      ${inputValue} kilos = ${(inputValue* 2.204).toFixed(3)} pounds | ${inputValue} pounds = ${(inputValue * 0.454).toFixed(3)} kilos
    `;
  }
})