function validateName() {
    var nameField = document.getElementById('nombre');
    var validName = /^[A-Za-z\s]+$/;
    var errorName = document.getElementById('nameError');

    if (nameField.value.trim() === "") {
        errorName.innerHTML = "Rellene este campo";
        nameField.classList.add("invalid");
        nameField.classList.add("errorIcon");
        nameField.classList.remove("valid");
        nameField.classList.remove("successIcon");
        return false;
    } else if (validName.test(nameField.value)) {
        nameField.classList.remove("invalid");
        nameField.classList.remove("errorIcon");
        errorName.innerHTML = "";
        nameField.classList.add("valid");
        nameField.classList.add("successIcon");
        return true;
    } else {
        errorName.innerHTML = "Nombre inválido";
        nameField.classList.add("invalid");
        nameField.classList.add("errorIcon");
        nameField.classList.remove("valid");
        nameField.classList.remove("successIcon");
        return false;
    }
}

function validateEmail() {
    var emailField = document.getElementById('email');
    var validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    var errorEmail = document.getElementById('emailError');

    if (emailField.value.trim() === "") {
        errorEmail.innerHTML = "Rellene este campo";
        emailField.classList.add("invalid");
        emailField.classList.add("errorIcon");
        emailField.classList.remove("valid");
        emailField.classList.remove("successIcon");
        return false;
    } else if (validEmail.test(emailField.value)) {
        emailField.classList.remove("invalid");
        emailField.classList.remove("errorIcon");
        errorEmail.innerHTML = "";
        emailField.classList.add("valid");
        emailField.classList.add("successIcon");
        return true;
    } else {
        errorEmail.innerHTML = "Email inválido";
        emailField.classList.add("invalid");
        emailField.classList.add("errorIcon");
        emailField.classList.remove("valid");
        emailField.classList.remove("successIcon");
        return false;
    }
}

function validatePassword() {
    var passwordField = document.getElementById('password');
    var validPassword = /^[\s\S]{4,8}$/;
    var errorPassword = document.getElementById('passError');

    if (passwordField.value.trim() === "") {
        errorPassword.innerHTML = "Rellene este campo";
        passwordField.classList.add("invalid");
        passwordField.classList.add("errorIcon");
        passwordField.classList.remove("valid");
        passwordField.classList.remove("successIcon");
        return false;
    } else if (validPassword.test(passwordField.value)) {
        passwordField.classList.remove("invalid");
        passwordField.classList.remove("errorIcon");
        errorPassword.innerHTML = "";
        passwordField.classList.add("valid");
        passwordField.classList.add("successIcon");
        return true;
    } else {
        errorPassword.innerHTML = "La contraseña debe tener entre 4 y 8 caracteres";
        passwordField.classList.add("invalid");
        passwordField.classList.add("errorIcon");
        passwordField.classList.remove("valid");
        passwordField.classList.remove("successIcon");
        return false;
    }
}

function validateConfirm() {
    var passwordField = document.getElementById('password');
    var confirmField = document.getElementById('confirm');
    var errorConfirm = document.getElementById('confirmError');

    if (confirmField.value.trim() === "") {
        errorConfirm.innerHTML = "Rellene este campo";
        confirmField.classList.add("invalid");
        confirmField.classList.add("errorIcon");
        confirmField.classList.remove("valid");
        confirmField.classList.remove("successIcon");
        return false;
    } else if (passwordField.value === confirmField.value) {
        confirmField.classList.remove("invalid");
        confirmField.classList.remove("errorIcon");
        errorConfirm.innerHTML = "";
        confirmField.classList.add("valid");
        confirmField.classList.add("successIcon");
        return true;
    } else {
        errorConfirm.innerHTML = "Las contraseñas no coinciden";
        confirmField.classList.add("invalid");
        confirmField.classList.add("errorIcon");
        confirmField.classList.remove("valid");
        confirmField.classList.remove("successIcon");
        return false;
    }
}

function borderButton() {
    var submitButton = document.querySelector("input[type='submit']");
    submitButton.addEventListener("mouseover", function () {
        this.style.border = "2px solid #4CAF50";
    });
    submitButton.addEventListener("mouseout", function () {
        this.style.border = "none";
    });
}

function showValidationIcons() {
    var formFields = document.querySelectorAll("input[type='text'], input[type='password']");
    formFields.forEach(function (field) {
        field.addEventListener("input", function () {
            var fieldContainer = this.parentNode;
            var errorContainer = fieldContainer.querySelector(".error");
            if (this.classList.contains("invalid")) {
                fieldContainer.classList.add("errorAnimation");
                errorContainer.classList.add("fadeIn");
                errorContainer.style.display = "block";
            } else if (this.classList.contains("valid")) {
                fieldContainer.classList.remove("errorAnimation");
                errorContainer.classList.remove("fadeIn");
                errorContainer.style.display = "none";
            }
        });
    });
}

function validateForm() {
    if (
        validateConfirm() &&
        validatePassword() &&
        validateEmail() &&
        validateName()
    ) {
        alert("Se ha inscrito correctamente.");
        return true;
    } else {
        return false;
    }
}

borderButton();
showValidationIcons();
