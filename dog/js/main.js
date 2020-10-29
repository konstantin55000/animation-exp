 window.addEventListener('DOMContentLoaded', () => {
     console.log(document.getElementById("container"));
     gsap.to('#dog-head', 1, { y: 5, rotation: 14, ease: "circ.out", repeat: 1, yoyo: true });
     gsap.to('#tail', 0.5, { x: 2, repeat: -1, yoyo: true });
     gsap.to('#front-legs', 0.8, { x: 4, rotation: -25, ease: "circ.out" });
     gsap.to('#back-legs', 0.8, { x: 1.5, rotation: -10, ease: "circ.out", yoyo: true, repeat: 1 });
 });