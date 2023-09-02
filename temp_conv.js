function convertTemperature() {
    const inputTemp = parseFloat(document.getElementById("inputTemp").value);
    const unitFrom = document.getElementById("unitFrom").value;
    const resultElement = document.getElementById("result");

    if (unitFrom === "celsius") {
      const fahrenheit = (inputTemp * 9/5) + 32;
      resultElement.textContent = `${inputTemp}°C is equal to ${fahrenheit.toFixed(2)}°F`;
    } else {
      const celsius = (inputTemp - 32) * 5/9;
      resultElement.textContent = `${inputTemp}°F is equal to ${celsius.toFixed(2)}°C`;
    }
  }