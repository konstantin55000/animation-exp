 var time_slider_autoplay = 3000; //speed for autoplay in first slider
 var time_slider_autoplay2 = 3000; //speed for autoplay in second slider
 var is_autoplay = true;
 var last_slide = false;


 var animate_current_slide = () => {
     gsap.fromTo('.product_price', {
         rotation: -30
     }, {
         rotation: 0,
         duration: .5,
         y: 10,
         alpha: 1,
         scale: 1.2
     });

     gsap.to('.product_name', {
         alpha: 1
     });

     let tl_product = gsap.timeline();

     tl_product.to('.product_model_name', {
         y: -5,
         alpha: 1,
         duration: 0.2
     });

     tl_product.to('.white-label', {
         y: -5,
         alpha: 1,
         duration: 0.2
     });

     tl_product.to('.product_model', {
         y: -5,
         alpha: 1,
         duration: 0.2
     });

     gsap.to('.product_price_old', {
         duration: .5,
         y: 5,
         alpha: 1,
         scale: 1.2
     });

     let tl = gsap.timeline();

     tl.to('.product_img', {
         x: -10,
         duration: .3
     });

     tl.to('.product_img', {
         x: 0,
         duration: 0.3
     });

     tl.to('.product_img', {
         duration: .3,
         y: 10,
         alpha: 1,
         ease: Power2.easeOut,
         scale: 1.125
     });

     tl.to('.product_img', {
         delay: 0.1,
         duration: .3,
         ease: Power2.easeOut,
         scale: 1
     });

     //  gsap.registerPlugin(SplitText, CSSRulePlugin);
 }

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
             slideChange: function(ev) {
                 let sw = this;
                 let currIndex = sw.realIndex;
                 //  let c = document.querySelector('#action_title');
                 //  if (c !== null) {
                 //      if (currIndex == 0 || currIndex == 1) {
                 //          c.classList.add('hidden');
                 //      } else {
                 //          c.classList.remove('hidden');
                 //      }

                 setTimeout(function() {
                     animate_current_slide('#swiper-container');
                 }, 5);
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

 init_swiper();


 /* Template Handlers */
 window.addEventListener('DOMContentLoaded', () => {
     gsap.registerPlugin(SplitText, CSSRulePlugin);
     animate_current_slide();
 });