/**
 * init carousel
 */
document.addEventListener('DOMContentLoaded', function () {
  
  let newSplide = new Splide('#newSplide', {
    type: 'loop',
    drag: 'free',
    arrows: false,
    focus: 'center',
    perPage: 2.25,
    autoplay: true,
    interval: 3000,
  });
  newSplide.mount();

}
);
