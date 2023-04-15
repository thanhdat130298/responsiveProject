const body = document.querySelector("body");

//coupon list

const modal_couponList = document.getElementById("coupon-modal")

//confirm payment

const modal_confirmPayment = document.getElementById("modal-confirm-payment");

//open coupon list
const btn_openCouponList = document.getElementById("btn_open-list-coupon");

//open coupon detail

const btn_openModalCouponDetails = document.querySelectorAll("button[name='btn_open-coupon-detail']");

//open confirm payment

const btn_openConfirmPayment = document.getElementById("btn_confirm-payment");

//close
const close_couponList = document.getElementById("btn_close-modal-coupon-list")

const btn_closeModalThumbnail = document.getElementById("btn_close-thumbnail")

const btn_closeModalConfirmPayment = document.getElementById("btn_close-confirm-payment-modal");

//services

const modal_listServices = document.getElementById("modal-list-services");
const modal_selectedServices = document.getElementById("selected-services-modal")
let btn_openServiceInfo = document.querySelectorAll("button[name='btn_openServiceInfo']")

function openSuggestionForYou() {
    document.getElementById("suggestion-for-you").style.display = "block"
    body.style.overflow = "hidden"
}
function closeSuggestionForYou() {
    document.getElementById("suggestion-for-you").style.display ="none"
    body.style.overflow = "auto"
}

function openListServices() {
    if (modal_listServices) {
        modal_listServices.style.display = "block";
        body.style.overflow = "hidden"
    }
}
function openSelectedServices() {
    if (modal_selectedServices) {
        modal_selectedServices.style.display = "block";
        body.style.overflow = 'hidden'
    }
}
function close_listServices() {
    if (modal_listServices) {
        modal_listServices.style.display = "none";
        body.style.overflow = "auto"
    }
}
if (btn_openServiceInfo) {
        btn_openServiceInfo.forEach((element, index) => {
            element.onclick = event => {
                document.getElementById("services-booking-modal-" + (index + 1)).style.display = "block"
                body.style.overflow = "hidden"
            }
        })
    }

function close_serviceInfo() {
        btn_openServiceInfo.forEach((element, index) =>{
            document.getElementById("services-booking-modal-" + (index + 1)).style.display = "none"
            body.style.overflow = "auto"
})
}

function closeSelectedServices() {
    if (modal_selectedServices) {
        modal_selectedServices.style.display = "none"
        body.style.overflow = "auto"
    }
}

// function open close modal confirm edit
function openConfirmModal() {
    document.getElementById("modal-confirm-edit").classList.add("active");
}
function closeConfirmModal() {
    document.getElementById("modal-confirm-edit").classList.remove("active");
}

//open
btn_openCouponList.onclick = function () {
    modal_couponList.style.display = "block";
    body.style.overflow = 'hidden';
}

btn_openModalCouponDetails.forEach((element, index) => {
    element.onclick = event => {
        document.getElementById("coupon-detail-modal-" + (index + 1)).style.display = "block";
        modal_couponList.style.display = "none";
    }
})

// back to coupon list 

const btn_backToCouponList = document.querySelectorAll("button[id='btn_back-to-coupon-list']")

if (btn_backToCouponList) {
    btn_backToCouponList.forEach((element, index) => {
        element.onclick = event => {
            document.getElementById("coupon-detail-modal-" + (index + 1)).style.display = "none";
            modal_couponList.style.display = "block";
        }
    })
}

// confirm payment
if (btn_openConfirmPayment && btn_closeModalConfirmPayment) {
    btn_openConfirmPayment.onclick = function () {
        modal_confirmPayment.style.display = "block"
        body.style.overflow = 'hidden';
    }

    btn_closeModalConfirmPayment.onclick = function () {
        modal_confirmPayment.style.display = "none";
        body.style.overflow = "auto"
    }
}

if (close_couponList) {
    close_couponList.onclick = function () {
        modal_couponList.style.display = "none";
        body.style.overflow = "auto";
    }
}

let btn_edit = document.querySelectorAll("div[id='edit-button']")
btn_edit.forEach((element, index) => {
    element.onclick = event => {
        document.getElementById("custom-option-choose-" + (index + 1)).classList.toggle('active')
    }
});

function editSuccess() {
    document.getElementById("modal-success-edit-info").style.display = "block";
    body.style.overflow = "hidden";
}

function closeEditSuccess() {
    document.getElementById("modal-success-edit-info").style.display = "none";
    body.style.overflow = "auto";
}

window.onclick = function (event) {
    if (event.target == document.getElementById("suggestion-for-you")) {
        document.getElementById("suggestion-for-you").style.display = "none";
        body.style.overflow = "auto";
    }
    if (event.target == document.getElementById("services-booking-modal")) {
        document.getElementById("services-booking-modal").style.display = "none";
        body.style.overflow = "auto";
    }
    if (event.target == document.getElementById("modal-list-service")) {
        document.getElementById("modal-list-service").style.display = "none";
        body.style.overflow = "auto";
    }
    if (event.target == document.getElementById("selected-services-modal")) {
        document.getElementById("selected-services-modal").style.display = "none";
        body.style.overflow = "auto";
    }
    if (event.target == modal_couponList) {
        modal_couponList.style.display = "none";
        body.style.overflow = "auto";
    }
    if (event.target.getAttribute('name') == 'coupon-detail-modal') {
        event.target.style.display = "none";
        body.style.overflow = "auto";
    }
    if (event.target == modal_confirmPayment) {
        modal_confirmPayment.style.display = "none"
        body.style.overflow = "auto";
    }

    if (event.target == document.getElementById("modal-confirm-edit")) {
        document.getElementById("modal-confirm-edit").classList.remove("active");
    }

    if (event.target == modal_listServices) {
        modal_listServices.style.display = "none"
        body.style.overflow = "auto"
    }
    if(event.target.getAttribute('name') == 'services-booking-modal'){
        event.target.style.display = "none";
        body.style.overflow = "auto";
    }
    if (event.target != notification) {
        if (!open_Noti.contains(event.target)) {
            notification.classList.remove('active-dropdown')
        }
    }
    if (event.target != profile) {
        if (!open_profile.contains(event.target)) {
            profile.classList.remove('active-dropdown')
        }
    }
    if (event.target != currencyLanguage) {
        if(!open_currency.contains(event.target)) {
            currencyLanguage.classList.remove('active-dropdown')
        }
    }
}

const currencyLanguage = document.getElementById('language-currency-dropdown');
const notification = document.getElementById("notification_modal");
const profile = document.getElementById("profile-drop-down");
const open_Noti = document.getElementById('notification_button')
const open_profile = document.getElementById('open_profile')
const open_currency = document.getElementById('open_currency')


open_Noti.onclick = function () {
    notification.classList.toggle('active-dropdown')
}

open_profile.onclick = function () {
    profile.classList.toggle('active-dropdown');
}

open_currency.onclick = function () {
    currencyLanguage.classList.toggle('active-dropdown')
}

