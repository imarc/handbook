import { gsap } from 'gsap'
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin'
import { Flip } from 'gsap/Flip'


/**
 * animations
 */

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
