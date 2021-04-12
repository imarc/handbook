/**
 * sticky sidebar
 */

const navTOC = document.querySelector(".nav--toc")

const stickTOC = () => {
    const viewportHeight = document.documentElement.clientHeight

    if (navTOC.clientHeight <= viewportHeight) {
        navTOC.classList.add("torso__nav--toc-stuck")
    } else {
        navTOC.classList.remove("torso__nav--toc-stuck")
    }
}

if (navTOC) {
    document.addEventListener("DOMContentLoaded", stickTOC)
    window.addEventListener("resize", stickTOC)
}
