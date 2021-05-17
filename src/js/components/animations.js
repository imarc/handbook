import { gsap } from "gsap"

/**
 * animations
 */

const entryItems = document.querySelectorAll(".entry__item")

Array.from(entryItems).forEach((entryItem) => {
    const entryItemWidthHalf = entryItem.offsetWidth / 2;
    const entryItemHeightHalf = entryItem.offsetHeight / 2;

    const arrShapeLocations = [
        {
            x: entryItemWidthHalf,
            y: -entryItemHeightHalf,
        },
        {
            x: -entryItemWidthHalf,
            y: entryItemHeightHalf
        }
    ]

    let shapes = Array.from(entryItem.querySelectorAll(".entry__shape"))

    shapes.sort((a, b) => 0.5 - Math.random())

    entryItem.addEventListener("mouseenter", () => {
        shapes.forEach((shape, index) => {
            const location = arrShapeLocations[index]

            gsap.to(shape, {
                duration: .5,
                ease: 'expo.inOut',
                scale: 12,
                ...location,
            });
        })
    })

    entryItem.addEventListener("mouseleave", () => {
        shapes.forEach((shape, index) => {
            gsap.to(shape, {
                duration: .5,
                ease: 'expo.inOut',
                scale: 1,
                x: 0,
                y: 0,
            });
        })
    })
})
