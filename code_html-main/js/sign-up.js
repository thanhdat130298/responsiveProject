
// single date picker
$('#information-dob').daterangepicker({
    "showDropdowns": true, 
    "autoApply": true,
    "singleDatePicker": true,
    "minYear": 1900,
    "maxYear": 2023,
    "locale": {
        "format": "DD/MM/YYYY",
        "separator": " - ",
        "applyLabel": "Xác nhận",
        "cancelLabel": "Xoá ngày",
        "fromLabel": "From",
        "toLabel": "To",
        "customRangeLabel": "Custom",
        "weekLabel": "W",
        "daysOfWeek": [
            "CN",
            "T2",
            "T3",
            "T4",
            "T5",
            "T6",
            "T7"
        ],
        "monthNames": [
            "Tháng 1",
            "Tháng 2",
            "Tháng 3",
            "Tháng 4",
            "Tháng 5",
            "Tháng 6",
            "Tháng 7",
            "Tháng 8",
            "Tháng 9",
            "Tháng 10",
            "Tháng 11",
            "Tháng 12"
        ],
        "firstDay": 1
    },
    "startDate": "20/11/1992",
    "endDate": "20/11/2022",
    "opens": "right"
}, function (start, end, label) {
    console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
});

// show password function
function showPassword() {
    var password_input = document.getElementById("password_input")
    var password_image = document.getElementById("password_image")
    if (password_input.type === "password") {
        password_input.type = "text"
        password_image.src = "/libary/signin/svg/EyeOpen.svg"
    } else {
        password_input.type = "password"
        password_image.src = "/libary/signin/svg/EyeClosed.svg"
    }
}
function showRePassword() {
    var signup_re_password = document.getElementById("signup_re_password")
    var signup_re_password_image = document.getElementById("signup_re_password_image")
    if (signup_re_password.type === "password") {
        signup_re_password.type = "text"
        signup_re_password_image.src = "/libary/signin/svg/EyeOpen.svg"
    } else {
        signup_re_password.type = "password"
        signup_re_password_image.src = "/libary/signin/svg/EyeClosed.svg"
    }
}

// validate Form
var signup_submit = document.getElementById("signup_submit")
var signup_email = document.querySelector('input[name="signup_email"]')
var signup_password = document.querySelector('input[name="signup_password"]')
var signup_re_password = document.querySelector('input[name="signup_re_password"]')
var signup_email_error = document.getElementById("signup_email_error")
var signup_password_error = document.getElementById("signup_password_error")
var signup_repassword_error = document.getElementById("signup_repassword_error")

if (signup_submit) {
    signup_submit.addEventListener('click', (e) => {
        e.preventDefault()
        if (signup_email.value === '' || signup_email.value === null) {
            signup_email_error.style.display = 'block';
            signup_email.classList.add('error');
        } else {
            signup_email_error.style.display = 'none';
            signup_email.classList.remove('error');
        }

        if (signup_password.value === '' || signup_password.value === null) {
            signup_password_error.style.display = 'block';
            signup_password.classList.add('error');
        } else {
            signup_password_error.style.display = 'none';
            signup_password.classList.remove('error');
        }

        if (signup_re_password.value != signup_password.value) {
            signup_repassword_error.style.display = 'block';
            signup_re_password.classList.add('error');
        }
        if (signup_password.value === '' || signup_password.value === null && signup_re_password.value === signup_password.value) {
            signup_repassword_error.style.display = 'none';
            signup_re_password.classList.remove('error');
        }
    })
}

// validate empty input 
var information_submit = document.getElementById("information_submit")

var information_name = document.querySelector('input[name="information_name"]')
var information_dob = document.querySelector('input[name="information_dob"]')

var information_name_error = document.getElementById("information_name_error")
var information_dob_error = document.getElementById("information_dob_error")

information_submit.addEventListener('click', (e) => {
    e.preventDefault()
    if (information_name.value === '' || information_name.value === null) {
        information_name_error.style.display = 'block';
        information_name.classList.add('error');
    } else {
        information_name_error.style.display = 'none';
        information_name.classList.remove('error');
    }
    if (!information_dob.value) {
        information_dob_error.style.display = 'block'
        information_dob.classList.add('error');
    } else {
        information_dob_error.style.display = 'none';
        information_dob.classList.remove('error');
    }
})
