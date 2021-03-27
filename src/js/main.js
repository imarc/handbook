// import Vue from 'vue';

import { gsap } from 'gsap'

gsap.from(".entry__item", {
    ease: "power3.out",
    opacity: 0,
    duration: 1.25,
    y: 20,
    stagger: {
        amount: 0.5,
        grid: [0,1],
    }
});
