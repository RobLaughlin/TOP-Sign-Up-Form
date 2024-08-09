function pwdFieldChanged(e) {
    const pwdText = document.getElementById("Password");
    const confirmPwdText = document.getElementById("ConfirmPassword");

    const match = (pwdText.value === confirmPwdText.value);
    const pwdErrText = document.getElementsByClassName("pwdMatchError")[0];
    if (match) {
        pwdErrText.classList.add("invisible");
        pwdText.setCustomValidity("");
        pwdText.classList.remove("pwdMisMatch");
        confirmPwdText.setCustomValidity("");
        confirmPwdText.classList.remove("pwdMisMatch");
    }
    else {
        pwdErrText.classList.remove("invisible");
        pwdText.setCustomValidity("Passwords must match.");
        pwdText.classList.add("pwdMisMatch");
        confirmPwdText.setCustomValidity("Passwords must match.");
        confirmPwdText.classList.add("pwdMisMatch");
    }
}

function handlePhoneNumberInput(e) {
    if (e.key === 'Backspace' && e.target.value.length >= 2) {
        if (e.target.value[e.target.value.length - 2] === '-') {
            e.target.value = e.target.value.substring(0, e.target.value.length-1);
        }
    }
    else if (e.key < '0' || e.key > '9') {
        e.preventDefault();
    }
    else {
        // When to add a hyphen
        if (e.target.value.length === 3 || e.target.value.length === 7) {
            e.target.value += '-';
        }
    }
}

const pwdText = document.getElementById("Password");
const confirmPwdText = document.getElementById("ConfirmPassword");
const phoneNumberText = document.getElementById("PhoneNumber");

pwdText.addEventListener("input", pwdFieldChanged);
confirmPwdText.addEventListener("input", pwdFieldChanged);
phoneNumberText.addEventListener("keydown", handlePhoneNumberInput);