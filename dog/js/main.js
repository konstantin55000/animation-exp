window.addEventListener('DOMContentLoaded', () => {
    console.log(document.getElementById("container"));

    document.querySelector('#btn-head').addEventListener('mouseover', () => {
        gsap.to('#dog-head', 1, { y: 2, rotation: 2, ease: "circ.out", repeat: 1, yoyo: true });
    });

    document.querySelector('#btn-tail').addEventListener('mouseover', () => {
        gsap.to('#tail', 0.5, { x: 1, rotation: 1, repeat: 2, yoyo: true });
    });

    document.querySelector('#btn-front-legs').addEventListener('mouseover', () => {
        gsap.to('#front-leg-left', 0.8, { x: 2, rotation: -4, yoyo: true, repeat: 1, ease: "circ.out" });
        gsap.to('#front-leg-right', 0.8, { x: 2, rotation: -1, yoyo: true, repeat: 1, ease: "circ.out" });
    });


});