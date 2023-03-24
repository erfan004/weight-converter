const pound = 2.2046;
const kg = 0.4536;
const subBtn = document.querySelector(".submitBtn");
function loaded() {
  subBtn.addEventListener("click", convertToPound);
  document.querySelector("#select-met").addEventListener("change", (e) => {
    if (e.target.value == "pound") {
      document.querySelector(".convertMessage").textContent = "kg";
      document.querySelector(".convertedMessage").textContent = "pound";
      resetVals();
      subBtn.addEventListener("click", convertToPound);
    } 
    else {
      document.querySelector(".convertMessage").textContent = "pound";
      document.querySelector(".convertedMessage").textContent = "kg";
      resetVals();
      subBtn.addEventListener("click", convertTokg);
    }
  });
}
function convertToPound() {
    let convertBox = document.querySelector(".convertBox").value;
  document.querySelector(".convertedBox").value = convertBox * pound;
}
function convertTokg() {
    let convertBox = document.querySelector(".convertBox").value;
  document.querySelector(".convertedBox").value = convertBox * kg;
}
function resetVals() {
  document.querySelector(".convertBox").value = 0;
  document.querySelector(".convertedBox").value = 0;
}