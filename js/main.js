const play = document.querySelector('.company-video__play');
const video = document.querySelector(".company-video__video video");

play.addEventListener('click', () => {
    video.play();
    video.setAttribute('controls', 'controls');
    play.classList.add('company-video__play--hidden');
})

const owl = $('.owl-carousel');
owl.owlCarousel(
    {
        center: true,
        loop: true,
        margin: 70,
        startPosition: 1,
        items: 1,
    }
);

// Go to the previous item
$('.pages__btn--prev').click(function () {
    owl.trigger('prev.owl.carousel');
})

// Go to the next item
$('.pages__btn--next').click(function () {
    owl.trigger('next.owl.carousel');
})