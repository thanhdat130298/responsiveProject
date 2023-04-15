/**
         * init carousel
         */
document.addEventListener('DOMContentLoaded', function () {
    let SigninSignUpSplide = new Splide('#SigninSignUpSplide', {
        type: 'loop',
        drag: 'free',
        arrows: false,
        snap: true,
        focus: 'center',
        perPage: 1,
        autoplay: true,
        interval: 3000,
    });
    SigninSignUpSplide.mount();
}
);