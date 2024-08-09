function pwdFieldChanged(e) {
    const pwdText = document.getElementById("Password");
    const confirmPwdText = document.getElementById("ConfirmPassword");

    const match = (pwdText.value === confirmPwdText.value);
    const pwdErrText = document.getElementsByClassName("pwdMatchError")[0];
    if (match) {
        pwdErrText.classList.add("invisible");
        pwdText.setCustomValidity("");
        confirmPwdText.setCustomValidity("");
    }
    else {
        pwdErrText.classList.remove("invisible");
        pwdText.setCustomValidity("Passwords must match.");
        confirmPwdText.setCustomValidity("Passwords must match.");
    }
}

const pwdText = document.getElementById("Password");
const confirmPwdText = document.getElementById("ConfirmPassword");
pwdText.addEventListener("input", pwdFieldChanged);
confirmPwdText.addEventListener("input", pwdFieldChanged);