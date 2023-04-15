// show password function
function showPassword() {
    var forgot_password_new_password = document.getElementById("forgot_password_new_password")
    var forgot_password_new_password_image = document.getElementById("forgot_password_new_password_image")
    if (forgot_password_new_password.type === "password") {
        forgot_password_new_password.type = "text"
        forgot_password_new_password_image.src = "/libary/signin/svg/EyeOpen.svg"
    } else {
        forgot_password_new_password.type = "password"
        password_image.src = "/libary/signin/svg/EyeClosed.svg"
    }
}
function showRePassword() {
    var forgot_password_re_new_password = document.getElementById("forgot_password_re_new_password")
    var forgot_password_re_new_password_image = document.getElementById("forgot_password_re_new_password_image")
    if (forgot_password_re_new_password.type === "password") {
        forgot_password_re_new_password.type = "text"
        forgot_password_re_new_password_image.src = "/libary/signin/svg/EyeOpen.svg"
    } else {
        forgot_password_re_new_password.type = "password"
        forgot_password_re_new_password_image.src = "/libary/signin/svg/EyeClosed.svg"
    }
}

// validateForm
var forgot_password_submit = document.getElementById("forgot_password_submit")

var forgot_password_new_password = document.querySelector('input[name="forgot_password_new_password"]')
var forgot_password_re_new_password = document.querySelector('input[name="forgot_password_re_new_password"]')

var forgot_password_new_password_error = document.getElementById("forgot_password_new_password_error")
var forgot_password_re_new_password_error = document.getElementById("forgot_password_re_new_password_error")

forgot_password_submit.addEventListener('click', (e) => {
    e.preventDefault()

    if (forgot_password_new_password.value === '' || forgot_password_new_password.value === null) {
        forgot_password_new_password_error.style.display = "block";
        forgot_password_new_password.classList.add('error');
    } else {
        forgot_password_new_password_error.style.display = "none";
        forgot_password_new_password.classList.remove('error');
    }

    if (forgot_password_re_new_password.value != forgot_password_new_password.value) {
        forgot_password_re_new_password_error.style.display = 'block';
        forgot_password_re_new_password.classList.add('error');
    } else {
        forgot_password_re_new_password_error.style.display = 'none';
        forgot_password_re_new_password.classList.remove('error');
    }
})

// case verify empty account input, another case like this

var forgot_password_submit = document.getElementById('forgot_password_submit');
var forgot_email = document.querySelector('input[name="forgot_email"]')
var forgot_password_error_email = document.getElementById('forgot_password_error_email')

forgot_password_submit.addEventListener('click', (e) => {
    e.preventDefault()
    if (forgot_email.value === '' || forgot_email.value === null) {
        forgot_password_error_email.style.display = 'block';
        forgot_email.classList.add('error');
    } else {
        forgot_password_error_email.style.display = 'none';
        forgot_email.classList.remove('error');
    }
})
