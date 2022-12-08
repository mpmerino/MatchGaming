const form = document.getElementById("form");
const inputs = document.querySelectorAll("#form input");

const regex = {
  userName: /^[A-Za-z0-9_]{5,29}$/,
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
  email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/,
};

const fields = {
  userName: false,
  email: false,
  password: false,
  password2: false,
};

const validateForm = (e) => {
  switch (e.target.name) {
    case "userName":
      validateField(regex.userName, e.target, "userName");
      break;

    case "email":
      validateField(regex.email, e.target, "email");
      break;

    case "password":
      validateField(regex.password, e.target, "password");
      validatePassword();
      break;

    case "password2":
      validatePassword();
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

const validatePassword = () => {
  const inputPassword1 = document.getElementById("password");
  const inputPassword2 = document.getElementById("password2");

  if (
    inputPassword1.value == inputPassword2.value &&
    inputPassword2.value != null &&
    inputPassword2.value != ""
  ) {
    document.getElementById(`password2Group`).classList.remove("form-wrong");
    document.getElementById(`password2Group`).classList.add("form-right");
    document
      .querySelector(`#password2Group i`)
      .classList.remove("fa-circle-xmark");
    document
      .querySelector(`#password2Group i`)
      .classList.add("fa-circle-check");
    document
      .querySelector(`#password2Group .formError`)
      .classList.remove("show");
    fields["password2"] = true;
  } else {
    document.getElementById(`password2Group`).classList.remove("form-right");
    document.getElementById(`password2Group`).classList.add("form-wrong");
    document
      .querySelector(`#password2Group i`)
      .classList.remove("fa-circle-check");
    document
      .querySelector(`#password2Group i`)
      .classList.add("fa-circle-xmark");
    document.querySelector(`#password2Group .formError`).classList.add("show");
    fields["password2"] = false;
  }
};

inputs.forEach((input) => {
  input.addEventListener("keyup", validateForm);
  input.addEventListener("blur", validateForm);
});

form.addEventListener("submit", (e) => {
  if (fields.userName && fields.email && fields.password) {
    setTimeout;
  } else {
    e.preventDefault();
    document.getElementById("warnings").classList.add("show");
  }
});
