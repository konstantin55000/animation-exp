window.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#btn-head').addEventListener('mouseenter', () => {
        gsap.to('#dog-head', 0.8, { y: 2, rotation: 2, ease: "circ.out", repeat: 1, yoyo: true });
    });

    document.querySelector('#btn-tail').addEventListener('mouseenter', (evt) => {
        gsap.to('#tail', 0.5, { x: 1, rotation: 1.5, ease: "circ.inOut", yoyo: true, repeat: 1 });
    });

    document.querySelector('#btn-front-legs').addEventListener('mouseenter', () => {
        gsap.to('#front-leg-left', 0.8, { x: 2, rotation: -4, yoyo: true, repeat: 1, ease: "circ.out" });
        gsap.to('#front-leg-right', 0.8, { x: 2, rotation: -1, yoyo: true, repeat: 1, ease: "circ.out" });
    });

});