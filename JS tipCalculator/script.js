const priceInput = document.querySelector("#price-input");
const deleteBtn = document.querySelector(".delete");
const errorMsg = document.querySelector(".error-msg");
const card = document.querySelectorAll(".card");
const chooseInput = document.querySelector("#choose-input");
const submit = document.getElementById("submit");
const result = document.querySelector(".result");
const resultText = document.querySelector(".result-text");
const closeBtn = document.querySelector(".close");

// addEventListener for each card
card.forEach((c) => {
  c.addEventListener("click", () => {
    // remove all other current classes
    card.forEach((c) => {
      c.classList.remove("current");
    });
    chooseInput.value = "";
    // --> only one card can have focus
    c.classList.toggle("current");
    submit.scrollIntoView();
  });
});

// if user chooses own percentage: remove all other current classes
chooseInput.addEventListener("click", () => {
  card.forEach((c) => {
    c.classList.remove("current");
  });
});

function calculateTip() {
  let price = priceInput.value;
  // if no price given --> scroll to top , reveal error
  if (priceInput.value.length == 0) {
    document.getElementsByTagName("header")[0].scrollIntoView();
    priceInput.style.backgroundColor = "#ff4f4f3f";
  }
  // remove error styling if necessary
  priceInput.addEventListener("input", () => {
    priceInput.style.backgroundColor = "#fff";
  });
  // check if user made a #choose-input input
  if (chooseInput.value.length == 0) {
    var tipChoice = document.querySelector(".current").classList[1]; // classlist returns array
  } else {
    var tipChoice = chooseInput.value;
  }
  // calculating the tip and adding to total price
  let tip = 1 + parseFloat(tipChoice) / 100;
  let total = parseFloat(price) * tip;
  let totalOutput = total.toFixed(2);
  if (priceInput.value.length != 0) {
    result.style.display = "block";
    resultText.innerHTML = totalOutput;
  }
}

// close result textbox
closeBtn.addEventListener("click", () => {
  result.style.display = "none";
});

// clears all previous inputs
deleteBtn.addEventListener("click", () => {
  card.forEach((c) => {
    c.classList.remove("current");
  });
  priceInput.value = "";
  priceInput.classList.remove("wrong");
});
