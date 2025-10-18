const formComm = document.getElementById("formComm");
const fnComm = document.getElementById("fnComm");
const nComm = document.getElementById("nComm");
const emailComm = document.getElementById("emailComm");
const telComm = document.getElementById("telComm");
const dateComm = document.getElementById("dateComm");
const tattooTypeRadios = document.getElementsByName("tattooType");
const budComm = document.getElementById("budComm");

function validateFormComm() {
  let noError = true;
  const firstNameValue = fnComm.value.trim();
  const nameValue = nComm.value.trim();
  const emailValue = emailComm.value.trim();
  const telValue = telComm.value.trim();
  const dateValue = dateComm.value;
  const budgetValue = budComm.value.trim();

  const namePattern = /^[a-zA-Z\s-]+$/;

  if (!firstNameValue) {
    setError(fnComm, "Votre nom est requis.");
    noError = false;
  } else if (!namePattern.test(firstNameValue)) {
    setError(fnComm, "Entrez un nom de famille valide");
    noError = false;
  } else {
    setSuccess(fnComm);
  }

  if (!nameValue) {
    setError(nComm, "Votre prénom est requis.");
    noError = false;
  } else if (!namePattern.test(nameValue)) {
    setError(nComm, "Entrez un prénom valide");
    noError = false;
  } else {
    setSuccess(nComm);
  }

  if (telValue === "") {
    setError(telComm, "Votre numéro de téléphone est requis.");
    noError = false;
  } else if (!isValidPhone(telValue)) {
    setError(telComm, "Entrez un numéro de téléphone valide.");
    noError = false;
  } else {
    setSuccess(telComm);
  }

  if (dateValue === "") {
    setError(dateComm, "Votre date de naissance est requise.");
    noError = false;
  } else if (!isValidAge(dateValue)) {
    setError(dateComm, "Vous devez avoir 18 ans ou plus.");
    noError = false;
  } else {
    setSuccess(dateComm);
  }

  if (emailValue === "") {
    setError(emailComm, "Entrez une adresse courriel.");
    noError = false;
  } else if (!isValidEmail(emailValue)) {
    setError(emailComm, "Entrez une adresse courriel valide.");
    noError = false;
  } else {
    setSuccess(emailComm);
  }

  const tattooTypeSelected = Array.from(tattooTypeRadios).some(
    (radio) => radio.checked
  );
  const radioGroup = document.querySelector(".formCard__radioGroup");

  if (!tattooTypeSelected) {
    setErrorRadio(radioGroup, "Sélectionnez un type de tattoo.");
    noError = false;
  } else {
    setSuccessRadio(radioGroup);
  }

  if (budgetValue === "") {
    setErrorBudget(budComm, "Votre budget est requis.");
    noError = false;
  } else if (!isValidBudget(budgetValue)) {
    setErrorBudget(budComm, "Entrez un montant valide supérieur à 0.");
    noError = false;
  } else {
    setSuccessBudget(budComm);
  }

  return noError;
}

function isValidPhone(phone) {
  const phonePattern = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
  return phonePattern.test(phone);
}

function isValidAge(birthdate) {
  const today = new Date();
  const birth = new Date(birthdate);

  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }

  return age >= 18;
}

function isValidEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function setError(element, message) {
  const inputControl = element;
  const errorDisplay =
    inputControl.parentElement.querySelector(".errorMessage");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
}

function setSuccess(element) {
  const inputControl = element;
  const errorDisplay =
    inputControl.parentElement.querySelector(".errorMessage");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
}

function setErrorRadio(element, message) {
  const errorDisplay = element.querySelector(".errorMessage");
  errorDisplay.innerText = message;
  element.classList.add("error");
  element.classList.remove("success");
}

function setSuccessRadio(element) {
  const errorDisplay = element.querySelector(".errorMessage");
  errorDisplay.innerText = "";
  element.classList.add("success");
  element.classList.remove("error");
}

function isValidBudget(budget) {
  const budgetNum = parseFloat(budget);
  return !isNaN(budgetNum) && budgetNum > 0;
}

function setErrorBudget(element, message) {
  const inputControl = element;
  const errorDisplay =
    inputControl.parentElement.parentElement.querySelector(".errorMessage");

  if (errorDisplay) {
    errorDisplay.innerText = message;
  }
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
}

function setSuccessBudget(element) {
  const inputControl = element;
  const errorDisplay =
    inputControl.parentElement.parentElement.querySelector(".errorMessage");

  if (errorDisplay) {
    errorDisplay.innerText = "";
  }
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
}
