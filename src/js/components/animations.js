import { gsap } from "gsap"
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin"
import { CSSPlugin } from "gsap/CSSPlugin"

/**
 * animations
 */

const entryItems = document.querySelectorAll(".entry__item")

Array.from(entryItems).forEach((entryItem) => {
    entryItem.addEventListener("mouseenter", () => {
        // console.log('test1')
        // entryItem.querySelectorAll(".entry__shape")
        const tri = entryItem.querySelector(".entry__shape--triangle")


        gsap.to(tri, {
            duration: 1,
            ease: 'bounce',
            x: -600
        });
    })
})




// var entryItems = gsap.timeline()

// entryItems

// gsap.registerPlugin(DrawSVGPlugin)

// gsap.from(".entry__item", {
//     ease: "power3.out",
//     opacity: 0,
//     duration: 1.25,
//     y: 20,
//     stagger: {
//         amount: 0.5,
//         grid: [0,1],
//     }
// });

// var tl = gsap.timeline()

// tl.from(".icon--dept .icon__part", {
//     delay: .25,
//     duration: .75,
//     drawSVG: 0,
//     opacity: 0,
//     ease: "expo.in"
// }, 0.1)


    // .to(".ornaments", { duration: 1, css: { backgroundSize: '70% 70%' } })
    // .to(".backdrop__shape--squiggles", {duration: 1, x: '100%', y: '-50%' })


// background-position-x: 0, 100%;
// background-position-y: -100%;
// background-repeat: no-repeat;
// background-size: 0%;
