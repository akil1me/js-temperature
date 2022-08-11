let elForm = document.querySelector(".temperature__form");
let elInput = elForm.querySelector(".temperature__input");
let elSelect = elForm.querySelector(".temperature__select");

let elResult = document.querySelector(".temperature__result");

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  let inputValue = Number(elInput.value);
  let selectValue = elSelect.value;

  let celsius = inputValue;
  let formulCelKel = celsius + 273.15;
  let formulCelFahr = (celsius * (9 / 5)) + 32;

  if (isNaN(inputValue)) {
    elResult.setAttribute("class", "text-danger")
    elResult.textContent = "Faqat son qiymati berilsin";
  }
  else if (selectValue === "Kelvin") {
    elResult.setAttribute("class", "text-success")
    elResult.textContent = `Formula: ${celsius}℃ + 273.15 = ${formulCelKel.toFixed(2)}K`;
  }
  else if (selectValue === "Fahrenheit") {
    elResult.setAttribute("class", "text-success")
    elResult.textContent = `Formula: (${celsius}℃ * 9/5) + 32 = ${formulCelFahr.toFixed(2)}F`;
  }
  else if (isNaN(selectValue)) {
    elResult.setAttribute("class", "text-danger")
    elResult.textContent = "Kechirasiz siz temperatura birligini tanlamadingiz";
  }
})

elForm.addEventListener("reset", function (evt2) {
  evt2.preventDefault();

  elResult.textContent = "";
})
