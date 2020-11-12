 var time_slider_autoplay = 3000; //speed for autoplay in first slider
 var time_slider_autoplay2 = 3000; //speed for autoplay in second slider
 var is_autoplay = true;
 var last_slide = false;

 function init_swiper() {
     var swiperH = new Swiper('#swiper-container', {
         autoplay: {
             delay: time_slider_autoplay,
             stopOnLastSlide: true
         },
         spaceBetween: 0,
         // pagination: {
         //   el: '#swiper-pagination-h',
         //   clickable: true,
         // },
         pagination: false,
         loop: true,
         navigation: {

             nextEl: '#swiper-button-next',
             prevEl: '#swiper-button-prev',
         },
         on: {
             init: function() {
                 product_change_animation('#swiper-container');
             },
             slideChange: function(ev) {
                 let sw = this;
                 let currIndex = sw.realIndex;
                 let c = document.querySelector('#action_title');
                 if (c !== null) {
                     if (currIndex == 0 || currIndex == 1) {
                         c.classList.add('hidden');
                     } else {
                         c.classList.remove('hidden');
                     }
                 }
                 setTimeout(function() {
                     product_change_animation('#swiper-container');
                 }, 10);
             },
             autoplayStop: function() {
                 is_autoplay = false;
             },
             reachEnd: function() {
                 last_slide = true;
             }
         },
     });
     swiperH.autoplay.stop();
 }