// openCurrentcyLanguage
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

window.onclick = function (event) {
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

