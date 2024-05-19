const emailInput = document.getElementById("email");
const errorMsg = document.getElementById("email-error");
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const icon = document.getElementById("error-icon");

function emailValidation() {
  if (emailInput.value === "") {
    emailInput.style.border = "";
    errorMsg.style.display = "";
    icon.style.display = "";
    return true;
  } else if (emailInput.value.match(emailRegex)) {
    emailInput.style.border = "";
    errorMsg.style.display = "";
    icon.style.display = "";
    return true;
  } else {
    emailInput.style.border = "2px solid hsl(0, 93%, 68%)";
    errorMsg.style.display = "block";
    icon.style.display = "block";
    return false;
  }
}

emailInput.addEventListener("keyup", emailValidation);

const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  if (!emailValidation()) {
    event.preventDefault();
  }
});
