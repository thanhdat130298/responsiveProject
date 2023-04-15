document.addEventListener('DOMContentLoaded', function () {
    var main = new Splide('#main-carousel', {
        type: 'fade',
        rewind: true,
        pagination: false,
        arrows: true,
        interval: 3000,
    });

    var thumbnails = new Splide('#thumbnail-carousel', {
        fixedWidth: 130,
        fixedHeight: 100,
        gap: 20,
        rewind: true,
        pagination: false,
        isNavigation: true,
        arrows: false,
        interval: 3000,
    });

    main.sync(thumbnails);
    main.mount();
    thumbnails.mount();
});