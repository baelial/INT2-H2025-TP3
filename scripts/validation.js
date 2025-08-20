// Validation prise d'un précédent projet, à titre d'exemple et de référence

const formNews = document.getElementById('formNews');
const emailNews = document.getElementById('emailNews');

function validateFormNews() {
    let noError = true;
    const emailValue = emailNews.value.trim();

    if (emailValue === ''){
        setError(emailNews, 'Entrez une adresse courriel.');
        noError = false;
    } else if (!isValidEmail(emailValue)){
        setError(emailNews, 'Entrez une adresse courriel valide.');
        noError = false;
    } else {
        setSuccess(emailNews);
    }
    return noError;
}

function isValidEmail (email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function setError (element, message) {
    const inputControl = element;
    const errorDisplay = inputControl.parentElement.querySelector('.errorMessage');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

function setSuccess (element) {
    const inputControl = element;
    const errorDisplay = inputControl.parentElement.querySelector('.errorMessage');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}