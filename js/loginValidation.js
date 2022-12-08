const form = document.getElementById("form");
const inputs = document.querySelectorAll("#form input");

const regex = {
  password: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/,
  email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/,
};

const fields = {
  email: false,
  password: false,
};

const validateForm = (e) => {
  switch (e.target.name) {
    case "email":
      validateField(regex.email, e.target, "email");
      break;

    case "password":
      validateField(regex.password, e.target, "password");
      break;
  }
};

const validateField = (expression, input, field) => {
  if (expression.test(input.value) & (input.value != null)) {
    document.getElementById(`${field}Group`).classList.remove("form-wrong");
    document.getElementById(`${field}Group`).classList.add("form-right");
    document
      .querySelector(`#${field}Group i`)
      .classList.remove("fa-circle-xmark");
    document.querySelector(`#${field}Group i`).classList.add("fa-circle-check");
    document
      .querySelector(`#${field}Group .formError`)
      .classList.remove("show");
    fields[field] = true;
  } else {
    document.getElementById(`${field}Group`).classList.remove("form-right");
    document.getElementById(`${field}Group`).classList.add("form-wrong");
    document
      .querySelector(`#${field}Group i`)
      .classList.remove("fa-circle-check");
    document.querySelector(`#${field}Group i`).classList.add("fa-circle-xmark");
    document.querySelector(`#${field}Group .formError`).classList.add("show");
    fields[field] = false;
  }
};

inputs.forEach((input) => {
  input.addEventListener("keyup", validateForm);
  input.addEventListener("blur", validateForm);
});

form.addEventListener("submit", (e) => {
  if (fields.email && fields.password) {
    setTimeout;
  } else {
    e.preventDefault();
    document.getElementById("warnings").classList.add("show");
  }
});
