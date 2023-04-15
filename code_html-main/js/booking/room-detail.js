// modal show all amenities, show all comment
// Get the modal
const modal_amenities = document.getElementById("amenities-modal");
const body = document.querySelector('body');
const modal_comment = document.getElementById("comment-modal");

// Get the button that opens the modal
const btn_openamenities = document.getElementById("btn-openamenities");
const btn_openComment = document.getElementById("btn-openComment");

// Get the  element that closes the modal
const close_amenities = document.getElementById("close-amenities");
const close_comment = document.getElementById("close-all-comment");

// When the user clicks on the button, open the modal
btn_openamenities.onclick = function () {
    modal_amenities.style.display = "block";
    body.style.overflow = "hidden";
}
btn_openComment.onclick = function () {
    modal_comment.style.display = "block";
    body.style.overflow = "hidden";
}
// When the user clicks (x), close the modal
close_amenities.onclick = function () {
    modal_amenities.style.display = "none";
}
close_comment.onclick = function () {
    modal_comment.style.display = "none";
    body.style.overflowY = "auto";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal_amenities) {
        modal_amenities.style.display = "none";
        body.style.overflowY = "auto";
    }
    if (event.target == modal_comment) {
        modal_comment.style.display = "none";
        body.style.overflowY = "auto";
    }
}
// end modal
// onclick button
const btn_description = document.getElementById("btn-description");
const btn_rating = document.getElementById("btn-rating");
const rating_text_1 = document.getElementById("rating-text-1");
const rating_text_2 = document.getElementById("rating-text-2");

let reply = document.querySelectorAll("button[name='reply']");
reply.forEach((element, index) => {
    element.onclick = event => {
        document.getElementById("reply-input-field-" + (index + 1)).classList.toggle("reply")
        document.getElementById("card-comment-" + (index + 1)).classList.toggle("card-comment-focus")
        document.getElementById("input-" +(index + 1 )).focus() 
    }
});

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


// your choice Js
