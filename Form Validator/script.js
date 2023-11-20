const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

//Show error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

//Show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

//Check email is valid
function isValidEmail(email) {
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return re.test(String(email).toLocaleLowerCase());
}

//Event listeners
form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (username.value === "") {
    showError(username, "Your username is not correct");
  } else {
    showSuccess(username);
  }

  if (email.value === "") {
    showError(email, "Your email is not correct");
  } else if (!isValidEmail(email.value)) {
    showError(email, "Your email is not valid");
  } else {
    showSuccess(email);
  }

  if (password.value === "") {
    showError(password, "Your password is not correct");
  } else {
    showSuccess(password);
  }

  if (password2.value === "") {
    showError(password2, "Your password is not correct");
  } else {
    showSuccess(password2);
  }
});
