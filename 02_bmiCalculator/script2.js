const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (height <= 0 || isNaN(height) || height == "") {
    results.innerHTML = "Enter a valid height";
  } else if (weight <= 0 || isNaN(weight) || weight == "") {
    results.innerHTML = "Enter a valid weight";
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;
  }
});
