// Hamburge Menu
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open');
    mobileMenu.classList.toggle('-translate-y-full');
    mobileMenu.classList.toggle('opacity-0');
})

// Banner icon slider
$('.icon-slider').owlCarousel({
    autoWidth: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplaySpeed: 1000,
    loop: true,
    slideBy: 1,
    lazyLoad: true,
    margin: 50,
    nav: false,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        250:{
            items:2
        },
        400:{
            items:3
        },
        750:{
            items:4
        },
        1000:{
            items:5
        }
    }
})


const prevArr = '<span class="prev-arrow-lft"><img src="./img/arrow-left.svg" alt="Previous"></span>';
const nextArr = '<span class="next-arrow-rgt"><img src="./img/arrow-right.svg" alt="Next"></span>';

$('.testimonial-slide').owlCarousel({
    loop: false,
    autoWidth: false,
    margin: 10,
    nav: true,
    dots: false,
    smartSpeed: 1000,
    navText: [
        prevArr,
        nextArr
    ],
    responsiveRefreshRate: 1,
    responsive:{
        0:{
            items:1
        },
        450:{
            items:2
        },
        1000:{
            items:3
        },
        1200: {
            items:3
        },
        1400: {
            items:3
        },
    }
})

// Accordion
const accordion = document.getElementsByClassName('contBx');

for(var i = 0; i < accordion.length; i++){
    accordion[i].addEventListener('click', function(){
        this.classList.toggle('active');
    })
}