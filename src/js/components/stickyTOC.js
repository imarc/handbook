/**
 * sticky sidebar
 */

const navTOC = document.querySelector(".nav--toc")

const stickTOC = () => {
    const viewportHeight = document.documentElement.clientHeight

    // make a const dedicated to navTOC with my 4.5rem masthead height plus 1rem $spacer????

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
