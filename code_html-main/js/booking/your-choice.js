const body = document.querySelector('body');

const rating_text_1 = document.getElementById("rating-text-1");
const rating_text_2 = document.getElementById("rating-text-2");

const card_booking = document.getElementById("card-booking");
const yourChoice_card = document.getElementById("your-choice-card");

//get modal
//your choice
const adultModal = document.getElementById("adult-modal");
const childModal = document.getElementById("child-modal");

const modal_roomDetail = document.getElementById("room-option-modal");
// comment and amenities
const modal_amenities = document.getElementById("amenities-modal");
const modal_comment = document.getElementById("comment-modal");

//setting modal
const modal_adults = document.querySelectorAll("div[name='adult-modal']");
const modal_kids = document.querySelectorAll("div[name='child-modal']");

//tooltip modal
// const modal_option_tooltip = document.getElementById("option-price-tooltip");

//coupon list
const modal_couponList = document.getElementById("coupon-modal")
const btn_backToCouponList = document.querySelectorAll("button[id='btn_back-to-coupon-list']")

//thumbnail modal
const modal_thumbnailSlide = document.getElementById("thumbnial-slide-modal")

// get button
// open your choice
const adultButton = document.getElementById("adult-button");
const childButton = document.getElementById("child-button");

const btnOpen_roomModal = document.getElementById("btn-open_modal-room-detail")

const opt_1 = document.getElementById("btn-opt-1");
const opt_2 = document.getElementById("btn-opt-2");

// open comment and amenities
const btn_openamenities = document.getElementById("btn-openamenities");
const btn_openComment = document.getElementById("btn-openComment");

const btn_description = document.getElementById("btn-description");
const btn_rating = document.getElementById("btn-rating");

//open tooltip
// const btn_open_optionTooltip = document.getElementById("btb_open-option-tooltip");

//open discount

const btn_openDiscountModal = document.querySelectorAll("div[name='discount']");

//open coupon list
const btn_openCouponList = document.getElementById("btn_open-list-coupon");

//open coupon detail

const btn_openModalCouponDetails = document.querySelectorAll("button[name='btn_open-coupon-detail']")

// open thumbnail
const btn_openModalThumbnail = document.getElementById("btn_open-thumbnail")

//close
// Get the  element that closes the modal
const close_amenities = document.getElementById("close-amenities");
const close_comment = document.getElementById("close-all-comment");

const close_roomModal = document.getElementById("close_modal-room-detail");

const villa = document.getElementById("view-villa");
const single_room = document.getElementById("view-single-room");

const btn_closeDiscountModal = document.querySelectorAll("button[id='btn_close-modal-detail-sale']")

const close_couponList = document.getElementById("btn_close-modal-coupon-list")

const btn_closeModalThumbnail = document.getElementById("btn_close-thumbnail")

// onclick open

function showForm_villaInfo() {
    const form_info = document.getElementById("your-choice-information")
    const addVilla = document.getElementById("add-villa")
    const addIcon_villa = document.getElementById("icon-add-villa")

    form_info.classList.toggle("d-block");

    if (form_info.classList.contains("d-block")) {
        addVilla.innerHTML = "Đã thêm vào danh sách đặt"
        addIcon_villa.style.display = "none"
    }
    else {
        addVilla.innerHTML = "Thêm vào danh sách đặt"
        addIcon_villa.style.display = "block"
    }
}

function showForm_roomInfo() {
    const roomInfo = document.getElementById("your-choice-room")
    const addRoom = document.getElementById("add-room")
    const addIcon_room = document.getElementById("icon-add-room")

    roomInfo.classList.toggle("d-block");

    if (roomInfo.classList.contains("d-block")) {
        addRoom.innerHTML = "Đã thêm vào danh sách đặt"
        addIcon_room.style.display = "none"
    }
    else {
        addRoom.innerHTML = "Thêm vào danh sách đặt"
        addIcon_room.style.display = "block"
    }
}

if(btnOpen_roomModal){
    btnOpen_roomModal.onclick = function () {
        modal_roomDetail.style.display = "block";
        body.style.overflow = "hidden";
    } 
}
if(close_roomModal){
    close_roomModal.onclick = function () {
        modal_roomDetail.style.display = "none";
        body.style.overflowY = "auto";
    }
}
if(btn_openamenities){
    btn_openamenities.onclick = function () {
        modal_amenities.style.display = "block";
        body.style.overflow = "hidden";
    }
    
}
if(btn_openComment){
    btn_openComment.onclick = function () {
        modal_comment.style.display = "block";
        body.style.overflow = "hidden";
    }
}
if(btn_rating){
    btn_rating.onclick = function () {
        btn_description.classList.remove("button-description-active", "text-greyscale-900", "body-18-bold");
        btn_description.classList.add("button-description-deactive", "text-greyscale-500", "body-18-medium");
        btn_rating.classList.remove("button-rating-deactive");
        btn_rating.classList.add("button-rating-active");
        rating_text_1.classList.remove("body-18-medium");
        rating_text_1.classList.add("body-18-bold");
        rating_text_2.classList.remove("body-18-medium", "text-greyscale-400");
        rating_text_2.classList.add("body-18-bold", "text-greyscale-900");
        document.getElementById("description").style.display = "none";
        document.getElementById("rating").style.display = "block";
    }
}
if(btn_description){
    btn_description.onclick = function () {
        btn_description.classList.remove("button-description-deactive", "text-greyscale-500", "body-18-medium");
        btn_description.classList.add("button-description-active", "text-greyscale-900", "body-18-bold");
        btn_rating.classList.remove("button-rating-active");
        btn_rating.classList.add("button-rating-deactive");
        rating_text_1.classList.remove("body-18-bold");
        rating_text_1.classList.add("body-18-medium");
        rating_text_2.classList.remove("body-18-bold", "text-greyscale-900");
        rating_text_2.classList.add("body-18-medium", "text-greyscale-400");
        document.getElementById("description").style.display = "block";
        document.getElementById("rating").style.display = "none";
    }
}

if(adultButton && childButton){
    adultButton.onclick = function () {
        adultModal.style.display = "block";
    }
    
    childButton.onclick = function () {
        childModal.style.display = "block";
    }    
}

if (btn_openCouponList) {
    btn_openCouponList.onclick = function () {
        modal_couponList.style.display = "block";
        body.style.overflow = 'hidden';
    }
}

let reply = document.querySelectorAll("button[name='reply']");
reply.forEach((element, index) => {
    element.onclick = event => {
        document.getElementById("reply-input-field-" + (index + 1)).classList.toggle("reply")
        document.getElementById("card-comment-" + (index + 1)).classList.toggle("card-comment-focus")
        document.getElementById("input-" + (index + 1)).focus()
    }
});

modal_adults.forEach((element, index) => {
    element.onclick = event => {
        document.getElementById("adult-modal-" + (index + 1)).style.display = "block";
    }
})

modal_kids.forEach((element, index) => {
    element.onclick = event => {
        document.getElementById("child-modal-" + (index + 1)).style.display = "block";
    }
})

if(btn_openModalThumbnail){
    btn_openModalThumbnail.onclick = function () {
        modal_thumbnailSlide.style.display = "block";
        body.style.overflow = "hidden"
    }
}
// open coupon detail
if(btn_openDiscountModal){
    btn_openDiscountModal.forEach((element, index) => {
        element.onclick = event => {
            document.getElementById("discount-detail-modal-" + (index + 1)).style.display = "block"
            body.style.overflowY = "hidden";
    
        }
    })
}
if(btn_openModalCouponDetails){
    btn_openModalCouponDetails.forEach((element, index) => {
        element.onclick = event => {
            document.getElementById("coupon-detail-modal-" + (index + 1)).style.display = "block";
            modal_couponList.style.display = "none";
        }
    })
}
if(btn_backToCouponList){
    btn_backToCouponList.forEach((element, index) => {
        element.onclick = event => {
            document.getElementById("coupon-detail-modal-" + (index + 1)).style.display = "none";
            modal_couponList.style.display = "block";
        }
    })
}
if(close_couponList){
    close_couponList.onclick = function (e) {
        modal_couponList.style.display = "none";
        body.style.overflow = "auto"
    }
     
}
if(btn_closeDiscountModal){
    btn_closeDiscountModal.forEach((element, index) => {
        element.onclick = event => {
            document.getElementById("discount-detail-modal-" + (index + 1)).style.display = "none"
            body.style.overflowY = "auto";
        }
    })
}
if(close_amenities){
    close_amenities.onclick = function () {
        modal_amenities.style.display = "none";
        body.style.overflowY = "auto";
    }
}

if(close_comment){
    close_comment.onclick = function () {
        modal_comment.style.display = "none";
        body.style.overflowY = "auto";
    }
    
}

if(btn_closeModalThumbnail){
    btn_closeModalThumbnail.onclick = function () {
        modal_thumbnailSlide.style.display = "none";
        body.style.overflow = "auto"
    }
}

if (opt_1 && opt_2) {
    opt_2.onclick = function () {
        opt_1.classList.remove("your-choice-nav-item-active")
        opt_1.classList.add("your-choice-nav-item")
        opt_2.classList.remove("your-choice-nav-item")
        opt_2.classList.add("your-choice-nav-item-active")

        villa.style.display = "none";
        single_room.style.display = "block";
    }

    opt_1.onclick = function () {
        opt_1.classList.remove("your-choice-nav-item")
        opt_1.classList.add("your-choice-nav-item-active")
        opt_2.classList.remove("your-choice-nav-item-active")
        opt_2.classList.add("your-choice-nav-item")

        single_room.style.display = "none";
        villa.style.display = "block";
    }
}

function closeModalAdult() {
    modal_adults.forEach((element, index) => {
            document.getElementById("adult-modal-" + (index + 1)).style.display = "none";
    })
}
function closeModalChild () {
    modal_kids.forEach((element, index) => {
            document.getElementById("child-modal-" + (index + 1)).style.display = "none";
    })
}
function openServiceList() {
    document.getElementById("modal-list-service").style.display = "block"
    body.style.overflow = "hidden"
}
// qr
const modal_qr = document.getElementById("modal-qr");
const btn_openModalQr = document.getElementById("btn_open-modal-qr")
const btn_closeModalQr = document.getElementById("btn_close-modal-qr")

if (btn_openModalQr && btn_closeModalQr) {
    btn_openModalQr.onclick = function () {
        modal_qr.style.display = "block";
        body.style.overflow = "hidden"
    }
    btn_closeModalQr.onclick = function () {
        modal_qr.style.display = "none";
        body.style.overflow = "auto";
    }
}

// confirm cancel

const modal_confirmCancel = document.getElementById("modal-confirm-cancel")
const btn_openModalConfirmCancel = document.getElementById("btn_open-modal-confirm-cancel")
const btn_closeModalConfirmCancel = document.getElementById("btn_close-modal-confirm-cancel")

if (btn_openModalConfirmCancel &&  btn_closeModalConfirmCancel) {
    btn_openModalConfirmCancel.onclick = function (e) {
        modal_confirmCancel.style.display = "block";
        body.style.overflow = "hidden"
    }
     btn_closeModalConfirmCancel.onclick = function () {
        modal_confirmCancel.style.display = "none";
        body.style.overflow = "auto";
    }
    function redirect () {
        window.location.href = "/pages/booking/order-details/user-successfully-cancel.html"
    }
}


// edit history
const modal_editHistory = document.getElementById("modal-edit-history")
const btn_openEditHistory = document.getElementById("btn_open-edit-history-modal")
const btn_closeEditHistory = document.getElementById("close-edit-history")

if(btn_openEditHistory && btn_closeEditHistory) {
    btn_openEditHistory.onclick = function () {
    modal_editHistory.style.display = "block";
    body.style.overflow = "hidden"
}
btn_closeEditHistory.onclick = function () {
    modal_editHistory.style.display = "none";
    body.style.overflow = "auto";
}
}

//refuse edit 
const btn_refuseEdit = document.getElementById("btn_refuse-edit")

if(btn_refuseEdit){
    btn_refuseEdit.onclick = function () {
        window.location.href = "/pages/booking/edit-request/refuse-edit-request.html"
    }
}

//edit-review tooltip

function openToolTip() {
    document.getElementById("edit-review-tooltip").classList.toggle('active')
}

function openEditReview() {
    if (document.getElementById("edit-review-tooltip").classList.contains("active")) {
        document.getElementById("edit-review-tooltip").classList.remove("active")
    }
}



// review modal

const open_reviewModal = document.getElementById("open_review")
const reviewModal = document.getElementById("modal-review")
const close_reviewModal = document.getElementById("close_review")


if(open_reviewModal && close_reviewModal){
    open_reviewModal.onclick = function () {
        reviewModal.style.display = "block";
        body.style.overflow = "hidden"
    }
    close_reviewModal.onclick = function () {
        reviewModal.style.display = "none"
        body.style.overflow = "auto"
    }
}
// edit review modal

const editReviewModal = document.getElementById("modal-editReview")
const open_editReviewModal = document.getElementById("open_edit-review")
const delete_editReviewModal = document.getElementById("detele_edit-review")
const close_editReviewModal = document.getElementById("close_edit-review")
const confirmDeteleReivewModal = document.getElementById("modal-confirm-delete-review")
const cancelDetele = document.getElementById("cancel_detele")

if(open_editReviewModal){
    open_editReviewModal.onclick = function () {
        
        editReviewModal.style.display = "block"
        body.style.overflow = "hidden"
    }
}
if(delete_editReviewModal){
    delete_editReviewModal.onclick = function () {
        confirmDeteleReivewModal.style.display = "block";
        editReviewModal.style.display = "none"
        body.style.overflow = "hidden"
    }
}
if(cancelDetele){
    cancelDetele.onclick = function () {
        confirmDeteleReivewModal.style.display = "none"
        body.style.overflow = "auto"
    }
}
if(close_editReviewModal){
    close_editReviewModal.onclick = function () {
        editReviewModal.style.display = "none"
        body.style.overflow = "auto"
    }
}

window.onclick = function (event) {
    if (event.target == document.getElementById("modal-list-service")) {
        document.getElementById("modal-list-service").style.display = "none";
        body.style.overflow = "auto";
    }
    if (event.target == modal_qr){
        event.target.style.display = "none";
        body.style.overflow = "auto"
    }
    if (event.target == modal_confirmCancel){
        event.target.style.display = "none";
        body.style.overflow = "auto"
    }

    if (event.target == modal_editHistory){
        event.target.style.display = "none";
        body.style.overflow = "auto"
    }
    if (event.target == reviewModal){
        event.target.style.display = "none";
        body.style.overflow = "auto"
    }
    if (event.target == editReviewModal){
        event.target.style.display = "none";
        body.style.overflow = "auto"
    }
    if (event.target == confirmDeteleReivewModal){
        event.target.style.display = "none";
        body.style.overflow = "auto"
    }
    if (event.target == modal_amenities) {
        modal_amenities.style.display = "none";
        body.style.overflowY = "auto";
    }
    if (event.target == modal_comment) {
        modal_comment.style.display = "none";
        body.style.overflowY = "auto";
    }
    if (event.target == modal_roomDetail) {
        modal_roomDetail.style.display = "none";
        body.style.overflowY = "auto";
    }
    if (event.target == adultModal) {
        adultModal.style.display = "none";
    }
    if (event.target == childModal) {
        childModal.style.display = "none";
    }
    if (event.target.getAttribute('name') == 'modal-adult') {
        event.target.style.display = "none";
        body.style.overflow = "auto";
    }
    if (event.target.getAttribute('name') == 'modal-child') {
        event.target.style.display = "none";
        body.style.overflow = "auto";
    }
    if (event.target.getAttribute('name') == 'discount-detail-modal') {
        event.target.style.display = "none";
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
    if (event.target == modal_thumbnailSlide) {
        modal_thumbnailSlide.style.display = "none";
        body.style.overflow = "auto"
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