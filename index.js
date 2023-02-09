let inputValue = document.getElementById("input-box").value;
let inputBtn = document.getElementById("input-btn");
let outputContainer = document.getElementById("output-container");

inputBtn.addEventListener("click", function() { 
    outputContainer.innerHTML = "";
    let number = inputValue;
    render(number)
})

function render(number) {
  outputContainer.innerHTML = `
    <div class="output-type length">
      <h2 class="output-header">Length (Meter/Feet)</h2>
      <p id="length-output" class=" output-desc">
        ${number} meters = ${(number* 3.281).toFixed(3)} feet | ${number} feet = ${(number / 0.305).toFixed(3)} meters
      </p>
    </div>
    <div class="output-type volume">
      <h2 class="output-header">Volume (Liters/Gallons)</h2>
      <p id="volume-output" class="output-desc">
        ${number} liters = ${(number* 0.264).toFixed(3)} gallons | ${number} gallons = ${(number * 3.785).toFixed(3)} liters
      </p>
    </div>
    <div class="output-type mass">
      <h2 class="output-header">Mass (Kilograms/Pounds)</h2>
      <p id="mass-output" class="output-desc">
      ${number} kilos = ${(number* 2.204).toFixed(3)} pounds | ${number} pounds = ${(number * 0.454).toFixed(3)} kilos
      </p>
    </div>
  `;
}