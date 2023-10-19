// mobile menu

let hamicon = Array.from(document.getElementsByClassName('hamicon'));
let mobileMenu = document.getElementById('mobile-menu');

hamicon.forEach((item) => {
  item.addEventListener('click', function () {
    mobileMenu.classList.toggle('active');
  })
})
// acardion

let dropdownBtn=Array.from(document.getElementsByClassName('dropdownBtn'));

dropdownBtn.forEach((item)=>{
  item.addEventListener('click',function () {
    item.querySelector('svg').classList.toggle('active');
    item.nextElementSibling.classList.toggle('active');
  })
})
// iran map
	//fata or justic departments locations
	var selpro = $("#selectedprovince")[0];
	$("body").on("mousemove" , ".selectormap .st0", function(event){
		selpro.style.left = event.clientX - $("#selectedprovince").width()/34 + "px";
		selpro.style.top = event.clientY - 205 + "px";
		selpro.innerHTML = $(this).attr("pname");
	});
	$("body").on("mouseover" , ".selectormap g", function(event){
		$("#selectedprovince").addClass("visible");
	});
	$("body").on("mouseleave" , ".selectormap g", function(event){
		$("#selectedprovince").removeClass("visible");
	});
// fancybox

Fancybox.bind("[data-fancybox]", {
  // Your custom options
});
// swiper
var banner = new Swiper(".banner", {
  loop: true,
  // autoplay: true,
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

ScrollReveal().reveal('.bottom', {
  duration: 2000,
  origin: 'bottom',
  distance: '100px',
  delay: 500,
  easing: 'ease-out'
});