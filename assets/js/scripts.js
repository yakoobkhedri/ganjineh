// mobile menu

let hamicon=Array.from(document.getElementsByClassName('hamicon'));
let mobileMenu=document.getElementById('mobile-menu');

hamicon.forEach((item)=>{
  item.addEventListener('click',function () {
    mobileMenu.classList.toggle('active');
  })
})

// view type

document.getElementById('radif').addEventListener('click',function () {
  this.classList.add('active');
  document.getElementById('soton').classList.remove('active');
  this.parentElement.parentElement.parentElement.nextElementSibling.querySelectorAll('.cols').forEach((item)=>{
    item.classList.add('radif');
    item.classList.remove('soton');
  })
})
document.getElementById('soton').addEventListener('click',function () {
  this.classList.add('active');
  document.getElementById('radif').classList.remove('active');
  this.parentElement.parentElement.parentElement.nextElementSibling.querySelectorAll('.cols').forEach((item)=>{
    item.classList.add('soton');
    item.classList.remove('radif');
  })
})

// fancybox

Fancybox.bind("[data-fancybox]", {
  // Your custom options
});
// swiper
var banner = new Swiper(".banner", {
  loop: true,
  autoplay: true,
  slidesPerView: 3,
  spaceBetween: 40,
  breakpoints: {
    1200: {
      slidesPerView: 2
    },
    992: {
      slidesPerView: 1
    },
    400: {
      slidesPerView: 1
    }
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
var cases = new Swiper(".cases", {
  loop: true,
  autoplay: true,
  slidesPerView: 4,
  spaceBetween: 10,
  breakpoints: {
    1200: {
      slidesPerView: 3
    },
    768: {
      slidesPerView: 2
    },
    400: {
      slidesPerView: 1
    }
  }
});
var cases2 = new Swiper(".cases2", {
  loop: true,
  autoplay: true,
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
  },
});
// animation

ScrollReveal().reveal('.top', {
  duration: 2000,
  origin: 'top',
  distance: '100px',
  delay: 500,
  easing: 'ease-out'
});

ScrollReveal().reveal('.left', {
  duration: 2000,
  origin: 'left',
  distance: '100px',
  delay: 500,
  easing: 'ease-out'
});