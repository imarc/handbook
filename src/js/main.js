// import Vue from 'vue';

import { gsap } from 'gsap'
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin'

gsap.registerPlugin(DrawSVGPlugin)

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

var tl = gsap.timeline()
tl.from(".icon--dept .icon__part", {
    delay: .25,
    duration: .75,
    drawSVG: 0,
    opacity: 0,
    ease: "expo.in"
}, 0.1)


// Color mode
const toggleColorMode = function toggleColorMode(e) {
    if (e.currentTarget.classList.contains("button--color-mode-light")) {
        document.documentElement.setAttribute("color-mode", "light")
        localStorage.setItem("color-mode", "light")
        return
    }

    document.documentElement.setAttribute("color-mode", "dark");
    localStorage.setItem("color-mode", "dark")
};

const toggleColorButtons = document.querySelectorAll(".button--color-mode")

toggleColorButtons.forEach((btn) => {
    btn.addEventListener("click", toggleColorMode)
})
