const form = document.getElementById('form');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const submit = document.getElementById('submit');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const emailID = email.value;

    if(firstName.value === "") {
        addError(firstName);
    }
    else {
        remError(firstName);
    }

    if(lastName.value === "") {
        addError(lastName);
    }
    else {
        remError(lastName);
    }

    if(!validateEmail(email.value)) {
        addError(email);
        email.value = "";
        email.placeholder = 'example@example/com';
    }
    else {
        remError(email);
    }

    if(password.value === "") {
        addError(password);
    }
    else {
        remError(password);
    }
})

function addError(feild) {
    feild.classList.add('ip-error');
    const error = feild.parentNode.querySelector('.error');
    const errorText = feild.parentNode.querySelector('.error-text');
    error.style.display = 'block';
    errorText.style.display = 'block';
}

function remError(feild) {
    feild.classList.remove('ip-error');
    const error = feild.parentNode.querySelector('.error');
    const errorText = feild.parentNode.querySelector('.error-text');
    error.style.display = 'none';
    errorText.style.display = 'none';
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}