$(document).ready(function () {
  $(".project-popup").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });

  $(".video").magnificPopup({
    type: "iframe"
  });

  $('.counter').counterUp();

  $('.testimonials').slick({
    prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-long-arrow-alt-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fas fa-long-arrow-alt-right"></i></button>',
    dots: true,
  });

 const header = document.querySelector('.header-area')

 function activeHeader(){
   const scrolltop = window.scrollY
   if(scrolltop > 100){
     header.classList.add('header-fixed')
   }else{
     header.classList.remove('header-fixed')
   }
 }

 window.addEventListener('scroll',activeHeader)
 window.addEventListener('load',activeHeader)

});


