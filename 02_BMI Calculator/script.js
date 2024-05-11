const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height`;
    results.style.color = "red";
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight`;
    results.style.color = "red";
  } else {
    const bmi = (weight / (height * height)) * 10000;
    results.style.fontWeight = "bold";
    results.style.fontSize = "1.6rem";

    if (bmi < 18.6) {
      results.innerHTML = `Your BMI is ${bmi.toFixed(2)}, which means you are Underweight.`;
      results.style.color = "blue"; 
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      results.innerHTML = `Your BMI is ${bmi.toFixed(2)}, which means you are Normal weight.`;
      results.style.color = "green"; 
    } else {
      results.innerHTML = `Your BMI is ${bmi.toFixed(2)}, which means you are Overweight.`;
      results.style.color = "orange"; 
    }
  }
});
