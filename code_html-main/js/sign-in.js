// show password function
function showPassword() {
    var signin_password = document.getElementById("signin_password")
    var password_image = document.getElementById("password_image")
    if (signin_password.type === "password") {
        signin_password.type = "text"
        password_image.src = "/libary/signin/svg/EyeOpen.svg"
    } else {
        signin_password.type = "password"
        password_image.src = "/libary/signin/svg/EyeClosed.svg"
    }
}

// validateForm empty 
var signin_submit = document.getElementById("signin_submit")
var signin_email = document.querySelector('input[name="signin_email"]')
var signin_password = document.querySelector('input[name="signin_password"]')
var error_email = document.getElementById("error_email")
var error_password = document.getElementById("error_password")

signin_submit.addEventListener('click', (e) => {
    e.preventDefault()
    if (signin_email.value === '' || signin_email.value === null) {
        error_email.style.display = 'block';
        signin_email.classList.add('error');
    } else {
        error_email.style.display = 'none';
        signin_email.classList.remove('error');
    }
    if (signin_password.value === '' || signin_password.value === null) {
        error_password.style.display = 'block'
        signin_password.classList.add('error');
    } else {
        error_password.style.display = 'none';
        signin_password.classList.remove('error');
    }

})