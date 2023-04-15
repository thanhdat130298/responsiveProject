
// input otp
const inputs = document.querySelectorAll("input"), button = document.querySelector("button");
const signup_otp_submit = document.getElementById("signup_otp_submit")
// iterate over all inputs
// when input number add class inputs.classList.add("input-number-active");
inputs.forEach((input, index1) => {
    input.addEventListener("keyup", (e) => {

        // This code gets the current input element and stores it in the currentInput variable
        // This code gets the next sibling element of the current input element and stores it in the nextInput variable
        // This code gets the previous sibling element of the current input element and stores it in the prevInput variable
        const currentInput = input,
            nextInput = input.nextElementSibling,
            prevInput = input.previousElementSibling;

        // if the value has more than one character then clear it
        if (currentInput.value.length > 1) {
            currentInput.value = "";
            return;
        }
        // if the next input is disabled and the current value is not empty
        //  enable the next input and focus on it
        if (nextInput && nextInput.hasAttribute("disabled") && currentInput.value !== "") {
            nextInput.removeAttribute("disabled");
            nextInput.focus();
            input.classList.add("input-number-active");
        }
        
        if(currentInput.value !== "" ){
            input.classList.add("input-number-active");
        }

        // if the backspace key is pressed
        if (e.key === "Backspace") {
            // iterate over all inputs again
            inputs.forEach((input, index2) => {
                // if the index1 of the current input is less than or equal to the index2 of the input in the outer loop
                // and the previous element exists, set the disabled attribute on the input and focus on the previous element
                if (index1 <= index2 && prevInput) {
                    input.setAttribute("disabled", true);
                    input.value = "";
                    prevInput.focus();
                    input.classList.remove("input-number-active");
                }
            });
        }
    });
});
inputs.forEach((input, index1) => {
    const lastCurrentInput = inputs[inputs.length - 1];
    const signup_otp_error = document.getElementById("signup_otp_error")
    const signup_otp_success = document.getElementById("signup_otp_success")
    console.log(inputs);
    signup_otp_submit.addEventListener('click', (e) => {
        if (lastCurrentInput.value === '' || lastCurrentInput.value === null) {
            signup_otp_error.style.display = 'flex'
            signup_otp_success.style.display = 'none'
        } else {
            signup_otp_error.style.display = 'none'
            signup_otp_success.style.display = 'flex'
        }
    })
})

//focus the first input which index is 0 on window load
window.addEventListener("load", () => inputs[0].focus());

// show password function
function showCurrentPassword() {
    var current_password = document.getElementById("current_password")
    var current_password_image = document.getElementById("current_password_image")
    if (current_password.type === "password") {
        current_password.type = "text"
        current_password_image.src = "/libary/signin/svg/EyeOpen.svg"
    } else {
        current_password.type = "password"
        current_password_image.src = "/libary/signin/svg/EyeClosed.svg"
    }
}
function showNewPassword() {
    var new_password = document.getElementById("new_password")
    var new_password_image = document.getElementById("new_password_image")
    if (new_password.type === "password") {
        new_password.type = "text"
        new_password_image.src = "/libary/signin/svg/EyeOpen.svg"
    } else {
        new_password.type = "password"
        new_password_image.src = "/libary/signin/svg/EyeClosed.svg"
    }
}

function showReNewPassword() {
    var renew_password = document.getElementById("renew_password")
    var renew_password_image = document.getElementById("renew_password_image")
    if (renew_password.type === "password") {
        renew_password.type = "text"
        renew_password_image.src = "/libary/signin/svg/EyeOpen.svg"
    } else {
        renew_password.type = "password"
        renew_password_image.src = "/libary/signin/svg/EyeClosed.svg"
    }
}

// show the form change password
function showFormChangePassword() {
    var button_show_form = document.getElementById("button_show_form")
    var change_password_form = document.getElementById("change_password")

    change_password_form.classList.toggle('d-flex')

    if (change_password_form.classList.contains('d-flex')) {
        button_show_form.innerHTML = "Huỷ";
    } else {
        button_show_form.innerHTML = "Đổi mật khẩu";
    }
}

// validateForm
var change_password_button = document.getElementById("change_password_button")

var current_password = document.querySelector('input[name="current_password"]')
var new_password = document.querySelector('input[name="new_password"]')
var renew_password = document.querySelector('input[name="renew_password"]')

var current_password_error = document.getElementById("current_password_error")
var new_password_error = document.getElementById("new_password_error")
var renew_password_error = document.getElementById("renew_password_error")

change_password_button.addEventListener('click', (e) => {
    e.preventDefault()
    // null current password
    if (current_password.value === '' || current_password.value === null) {
        current_password_error.style.display = 'block';
        current_password.classList.add('error');
    } else {
        current_password_error.style.display = 'none';
        current_password.classList.remove('error');
    }
    // null new password
    if (new_password.value === '' || new_password.value === null) {
        new_password_error.style.display = 'block'
        new_password.classList.add('error');
    } else {
        new_password_error.style.display = 'none';
        new_password.classList.remove('error');
    }

    if (renew_password.value != new_password.value) {
        renew_password_error.style.display = 'block';
        renew_password.classList.add('error');
    } else {
        renew_password_error.style.display = 'none';
        renew_password.classList.remove('error');
    }

    if (renew_password.value === new_password.value && current_password.value != '' || current_password.value != null) {
    }
})