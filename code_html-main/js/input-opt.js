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