import { gsap } from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger.js'

gsap.registerPlugin(ScrollTrigger)

/**
 * animations
 */

const entryItems = document.querySelectorAll(".entry__item")



Array.from(entryItems).forEach((entryItem) => {
    const entryItemX = entryItem.offsetWidth / 2.15;
    const entryItemY = entryItem.offsetHeight / 2.15;

    const arrShapeLocations = [
        {
            x: entryItemX,
            y: -entryItemY,
        },
        {
            x: -entryItemX,
            y: entryItemY
        }
    ]

    let shapes = Array.from(entryItem.querySelectorAll(".entry__shape"))

    shapes.sort((a, b) => 0.5 - Math.random())

    entryItem.addEventListener("mouseenter", () => {
        shapes.forEach((shape, index) => {
            const location = arrShapeLocations[index]

            ScrollTrigger.matchMedia({
                "(min-width: 1180px)": () => {
                    gsap.to(shape, {
                        duration: .25,
                        ease: 'expo.inOut',
                        scale: 1.5,
                        ...location,
                    });
                }
            })
        })
    })

    entryItem.addEventListener("mouseleave", () => {
        shapes.forEach((shape, index) => {

            ScrollTrigger.matchMedia({
                "(min-width: 1180px)": () => {
                    gsap.to(shape, {
                        duration: .25,
                        ease: 'expo.inOut',
                        scale: 1,
                        x: 0,
                        y: 0,
                    });
                }
            })
        })
    })
})
