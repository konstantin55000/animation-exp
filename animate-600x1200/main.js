 var time_slider_autoplay = 3000; //speed for autoplay in first slider
 var time_slider_autoplay2 = 3000; //speed for autoplay in second slider
 var is_autoplay = true;
 var last_slide = false;


 var animate_current_slide = () => {
     gsap.fromTo('.product_price', {
        scale: 1,
        alpha: 1
     }, {
         delay: .1,
         rotation: 0,
         duration: .5,
         y: 10,
         alpha: 1,
         scale: 1.2
     });
 
     gsap.to('.product_price', {
        scale: 1,
        alpha: 1,
        delay: .3,
     } );

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
    
    //removed slide to the left.
    //  tl.to('.product_img', {
    //      x: -10,
    //      duration: .3
    //  });

    //  tl.to('.product_img', {
    //      x: 0,
    //      duration: 0.3
    //  });

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

 function arrows() {


     let tl_arrows = gsap.timeline();
  

     tl_arrows.fromTo('.pre_title', {
         y: 0
     }, {
         y: 8,
         duration: .5,
         alpha: 1,
     });


     gsap.fromTo('.arrow_red', {
         x: -200
     }, {
         x: 0,
         duration: .5,
         alpha: 1 
     });


     gsap.fromTo('.arrow_red_fill', {
         x: 800
     }, {
         x: 0,
         duration: .5,
         alpha: 1 ,
         
     });


     let arrow_speed = 3;
     gsap.fromTo('.arrow_red',  { x: 0 , autoAlpha:1,}, {
         x: 800,
         duration: arrow_speed,
         autoAlpha: 0.1 ,
         delay: 1 ,
         ease: Circ.easeOut 
     });

     gsap.to('.arrow_red_fill',  {
         x: -800,
         duration: arrow_speed,
         autoAlpha: 0.1 ,
         delay: 1 ,
         ease: Circ.easeOut
         
     });

     tl_arrows.fromTo('.pre_title', { 
        autoAlpha:1
    }, {
        x: 800,
        duration: arrow_speed,
        autoAlpha: 0.1,
        delay: .5,
        ease: Circ.easeOut

    });
     
     //  gsap.to('.inner.top', 2, {
     //      x: 360,
     //      repeat: -1,
     //      ease: 'none'
     //  });

     let gap = 14;

     let tl2 = gsap.timeline();

     tl2.fromTo('.inner.top', gap, {
         x: -1600,
         repeat: -1,
         ease: 'none',
     }, {
         x: 800,
         repeat: -1,
         ease: 'none'  
     });


     gsap.fromTo('.inner.bottom', gap, {
         x: 800,
         repeat: -1,
         ease: 'none',
     }, {
         x: -1600,
         repeat: -1,
         ease: 'none'
     });
 }

function init_title() {
    let ttl = gsap.timeline();

    ttl.to('.inner_container_singles', { 
        y: -10,
        duration: .5,
        alpha: 1, 
        ease: Power1.easeOut
          
    });

     ttl.to('.action_title h1', {
        delay: 1,
        y: -10,
        duration: .5,
        alpha: 1,

        ease: Power1.easeOut
          
    });

    ttl.to('.action_title h2', {
        y: -10,
        duration: .2,
        alpha: 1,
        delay: 0.1,
        ease: Power1.easeOut
    });

    ttl.to('.action_title h3', {
        y: -10,
        duration: .2,
        alpha: 1,
        delay: 0.1,
        ease: Power1.easeOut
    }); 

    ttl.to('.action_title ', {
        delay:2,
        y: -300,
        duration: .5,
        alpha: 1 
    });
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

                 setTimeout(function() {
                     animate_current_slide('#swiper-container');
                 }, 600);
             },
             autoplayStop: function() {
                 is_autoplay = false;
             },
             reachEnd: function() {
                 last_slide = true;
             }
         },
     });

     //swiperH.autoplay.stop();

 }

 /* Template Handlers */
 window.addEventListener('DOMContentLoaded', () => {
     gsap.registerPlugin(SplitText, CSSRulePlugin);
   
     arrows();
     init_title();
     setTimeout(function() {
        init_swiper();
        animate_current_slide('#swiper-container');
    }, 6000);
 });