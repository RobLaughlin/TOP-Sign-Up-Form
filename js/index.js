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

const pwdText = document.getElementById("Password");
const confirmPwdText = document.getElementById("ConfirmPassword");
pwdText.addEventListener("input", pwdFieldChanged);
confirmPwdText.addEventListener("input", pwdFieldChanged);