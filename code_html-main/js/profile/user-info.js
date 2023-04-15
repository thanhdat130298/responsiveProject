

// open modal
const btn_openEdit = document.getElementById("btn-edit-info");
const btn_openEditPhone = document.getElementById("btn-edit-phone");
const btn_openEditEmail = document.getElementById("btn-edit-email");

// close modal
const btn_closeEdit = document.getElementById("btn-close-edit");

const btn_closePhoneSt1 = document.getElementById("btn-close-phone-st1");
const btn_closePhoneSt2 = document.getElementById("btn-close-phone-st2");


const btn_closeEmailSt1 = document.getElementById("btn-close-email-st1");
const btn_closeEmailSt2 = document.getElementById("btn-close-email-st2");

// change step
const btn_phoneNextStep = document.getElementById("btn-phone-next-step");
const btn_emailNextStep = document.getElementById("btn-email-next-step");

// get modal
const modal_editInfo = document.getElementById("modal-edit-info");
const modal_editPhone = document.getElementById("modal-edit-phone");
const modal_editEmail = document.getElementById("modal-edit-email");

const modal_editPhone_step1 = document.getElementById("phone-step1");
const modal_editPhone_step2 = document.getElementById("phone-step2");

const modal_editEmail_step1 = document.getElementById("email-step1");
const modal_editEmail_step2 = document.getElementById("email-step2");

//
const body = document.querySelector('body');

// btn open

btn_openEdit.onclick = function () {
    modal_editInfo.style.display = "block";
    body.style.overflow = "hidden"
}

btn_openEditEmail.onclick = function () {
    modal_editEmail.style.display = "block";
    body.style.overflow = "hidden"
}

btn_openEditPhone.onclick = function () {
    modal_editPhone.style.display = "block";
    body.style.overflow = "hidden"
}

// btn close
btn_closeEdit.onclick = function () {
    modal_editInfo.style.display = "none";
    body.style.overflow = "auto";
}

btn_closePhoneSt1.onclick = function () {
    modal_editPhone.style.display = "none";

    modal_editPhone_step1.classList.remove("deactive-step");
    modal_editPhone_step1.classList.add("active-step");
    modal_editPhone_step2.classList.remove("active-step");
    modal_editPhone_step2.classList.add("deactive-step");

    body.style.overflow = "auto";
}

btn_closePhoneSt2.onclick = function () {
    modal_editPhone.style.display = "none";

    modal_editPhone_step1.classList.remove("deactive-step");
    modal_editPhone_step1.classList.add("active-step");
    modal_editPhone_step2.classList.remove("active-step");
    modal_editPhone_step2.classList.add("deactive-step");

    phone_sent.style.visibility = "hidden";
    btn_sendPhoneOtp.innerHTML = "Gửi lại";
    btn_sendPhoneOtp.classList.remove("body-14-regular","text-greyscale-400");
    btn_sendPhoneOtp.classList.add("body-14-bold","text-semantic-1");

    body.style.overflow = "auto";
}

btn_closeEmailSt1.onclick = function () {
    modal_editEmail.style.display = "none";

    modal_editEmail_step1.classList.remove("deactive-step");
    modal_editEmail_step1.classList.add("active-step");
    modal_editEmail_step2.classList.remove("active-step");
    modal_editEmail_step2.classList.add("deactive-step");

    body.style.overflow = "auto";
}

btn_closeEmailSt2.onclick = function () {
    modal_editEmail.style.display = "none";

    modal_editEmail_step1.classList.remove("deactive-step");
    modal_editEmail_step1.classList.add("active-step");
    modal_editEmail_step2.classList.remove("active-step");
    modal_editEmail_step2.classList.add("deactive-step");

    email_sent.style.visibility = "hidden";
    btn_sendEmailOtp.innerHTML = "Gửi lại";
    btn_sendEmailOtp.classList.remove("body-14-regular","text-greyscale-400");
    btn_sendEmailOtp.classList.add("body-14-bold","text-semantic-1");

    body.style.overflow = "auto";
}

// change step
btn_phoneNextStep.onclick = function () {

    modal_editPhone_step1.classList.remove("active-step");
    modal_editPhone_step1.classList.add("deactive-step");
    modal_editPhone_step2.classList.remove("deactive-step");
    modal_editPhone_step2.classList.add("active-step");
}

btn_emailNextStep.onclick = function () {

    modal_editEmail_step1.classList.remove("active-step");
    modal_editEmail_step1.classList.add("deactive-step");
    modal_editEmail_step2.classList.remove("deactive-step");
    modal_editEmail_step2.classList.add("active-step");
}

// btn-send 
const btn_sendEmailOtp = document.getElementById("btn-send-email-opt");
const btn_sendPhoneOtp = document.getElementById("btn-send-phone-opt");

const email_sent = document.getElementById("emai_sent");
const phone_sent = document.getElementById("phone_sent");

btn_sendEmailOtp.onclick = function () {
    btn_sendEmailOtp.innerHTML = "Gửi lại (00:30)"
    btn_sendEmailOtp.classList.remove("body-14-bold","text-semantic-1");
    btn_sendEmailOtp.classList.add("body-14-regular","text-greyscale-400");
    email_sent.style.visibility = "visible";
}

btn_sendPhoneOtp.onclick = function () {
    btn_sendPhoneOtp.innerHTML = "Gửi lại (00:30)"
    btn_sendPhoneOtp.classList.remove("body-14-bold","text-semantic-1");
    btn_sendPhoneOtp.classList.add("body-14-regular","text-greyscale-400");
    phone_sent.style.visibility = "visible";
}

window.onclick = function(event) {
    if(event.target == modal_editInfo){
        event.target.style.display = "none";
        body.style.overflow = "auto"
    }
}

// otp js
const inputs = document.querySelectorAll("input[type=number]")
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
        if (currentInput.value !== "") {
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