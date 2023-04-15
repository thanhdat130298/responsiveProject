/**
 * init carousel
 */
document.addEventListener('DOMContentLoaded', function () {
    let HomepageSplide = new Splide('#HomepageSplide', {
        type: 'loop',
        drag: 'free',
        arrows: false,
        snap: true,
        focus: 'center',
        perPage: 4,
        autoplay: true,
        interval: 3000,
    });
    HomepageSplide.mount();

    let CommentSplide = new Splide('#CommentSplide', {
        type: 'loop',
        drag: 'free',
        arrows: false,
        snap: true,
        focus: 'center',
        perPage: 2.5,
        autoplay: true,
        interval: 3000,
    });
    CommentSplide.mount();
}
);


// open modal choose person
let title_where_you_go = document.getElementById('title_where_you_go')
let title_date_range_picker = document.getElementById('title_date_range_picker')
let title_add_person = document.getElementById('title_add_person')

let daterangepicker = document.querySelector('.daterangepicker')

let button_where_you_go = document.getElementById("button_where_you_go")
let modal_where_you_go = document.getElementById("modal_where_you_go")

let button_add_person = document.getElementById('button_add_person')
let modal_add_person = document.getElementById('modal_add_person')

button_where_you_go.addEventListener('click', (e) => {
    e.preventDefault()
    modal_where_you_go.classList.toggle('active');

    if (modal_where_you_go.classList.contains('active')) {
        title_where_you_go.classList.add('text-main-secondary');
        title_where_you_go.classList.remove('text-greyscale-500');
    } else {
        title_where_you_go.classList.remove('text-main-secondary');
        title_where_you_go.classList.add('text-greyscale-500');
    }
})

button_add_person.addEventListener('click', (e) => {
    e.preventDefault()
    modal_add_person.classList.toggle('active');
    if (modal_add_person.classList.contains('active')) {
        title_add_person.classList.add('text-main-secondary');
        title_add_person.classList.remove('text-greyscale-500');
    } else {
        title_add_person.classList.remove('text-main-secondary');
        title_add_person.classList.add('text-greyscale-500');
    }
})

// chưa check được style của dateranger
if (daterangepicker.style.display === 'block') {
    title_date_range_picker.classList.add('text-main-primary')
    title_date_range_picker.classList.remove('text-greyscale-500');
} else {
    title_date_range_picker.classList.remove("text-main-primary")
    title_date_range_picker.classList.add('text-greyscale-500');

}
        // homepage auto scroll