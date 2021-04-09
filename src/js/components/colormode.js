/**
 * colormode
 */

const toggleColorMode = function toggleColorMode(e) {
    if (e.currentTarget.classList.contains("color-mode__button--light")) {
        document.documentElement.setAttribute("color-mode", "light")
        localStorage.setItem("color-mode", "light")
        return
    }

    document.documentElement.setAttribute("color-mode", "dark");
    localStorage.setItem("color-mode", "dark")
};

const toggleColorButtons = document.querySelectorAll(".color-mode__button")

toggleColorButtons.forEach((btn) => {
    btn.addEventListener("click", toggleColorMode)
})
