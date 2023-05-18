const pound = 2.2046;
const kg = 0.4536;

const subBtn = document.querySelector(".submitBtn");
subBtn.addEventListener("click", convertToPound);

document.querySelector("#select-met").addEventListener("change", (e) => {
  switch (e.target.value) {
    case "pound":
      resetVals();
      console.log("pound");
      subBtn.removeEventListener('click', convertTokg); // Remove other event listener
      subBtn.addEventListener('click', convertToPound);
      break;
    case "kg":
      resetVals();
      console.log("kg");
      subBtn.removeEventListener('click', convertToPound); // Remove other event listener
      subBtn.addEventListener('click', convertTokg);
      break;
    default:
      resetVals();
      subBtn.removeEventListener('click', convertTokg); // Remove other event listener
      subBtn.addEventListener("click", convertToPound);
      break;
  }
});

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
