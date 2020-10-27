 window.addEventListener('DOMContentLoaded', () => {
     console.log(document.getElementById("container"));
     gsap.set("#container", { perspective: 600 });

     var total = 14;
     var container = document.getElementById("container"),
         w = window.innerWidth,
         h = window.innerHeight;

     for (i = 0; i < total; i++) {
         var element = document.createElement('div');
         gsap.set(element, { attr: { class: 'sheet' }, x: rotationCoords(0, w), y: rotationCoords(-250, -250), z: rotationCoords(-150, 150) });
         container.appendChild(element);
         processObjects(element);
     }

     function processObjects(elm) {
         gsap.fromTo(elm, rotationCoords(6, 15), { y: -50 }, { y: h + 50, repeat: -1, delay: -5, ease: Power2.easeOut })
         gsap.to(elm, rotationCoords(2, 8), { x: '+=300', rotationX: rotationCoords(0, 360), rotationY: rotationCoords(0, 360), repeat: -1, yoyo: true, ease: Sine.easeInOut, delay: -15 });
     };

     function rotationCoords(min, max) { return min + Math.random() * (max - min) };
 });