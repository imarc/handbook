// import Vue from 'vue';

import { gsap } from 'gsap'
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin'
import { Flip } from 'gsap/Flip'

gsap.registerPlugin(DrawSVGPlugin)
gsap.registerPlugin(Flip)

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

    const state = Flip.getState(toggleColorButtonActive)

    e.currentTarget.appendChild(toggleColorButtonActive)

    Flip.from(state, {
        absolute: true,
        duration: .25,
        ease: "expo.inOut",
    });

    if (e.currentTarget.classList.contains("color-mode__button--light")) {
        document.documentElement.setAttribute("color-mode", "light")
        localStorage.setItem("color-mode", "light")
        return
    }

    document.documentElement.setAttribute("color-mode", "dark");
    localStorage.setItem("color-mode", "dark")
};

const toggleColorButtons = document.querySelectorAll(".color-mode__button")
const toggleColorButtonActive = document.querySelector(".color-mode__active")
const toggleColorButtonDark = document.querySelector(".color-mode__button--dark")

toggleColorButtons.forEach((btn) => {
    btn.addEventListener("click", toggleColorMode)
})


