/**
 * blockLink
 * Thank you jjimmy
 *
 * Makes block links, such as link cards and branded cards, entirely clickable,
 * while allowing for text selection and focus of individual links within.
 * Defaults to linking the block to the first link in the card.
 * You can specify a link to follow by adding [data-main-link]
 * to the desired <a> tag
 */

const blockLinks = document.querySelectorAll(
    ".entry__item"
)

Array.from(blockLinks).forEach((blockLink) => {
    blockLink.addEventListener("click", () => {
        let elMainLink
        const links = blockLink.getElementsByTagName("a")
        const isTextSelected = window.getSelection().toString()

        elMainLink = blockLink.querySelector("[data-main-link]")

        // Prevent double link clicks
        Array.from(links).forEach((elLink) => {
            elLink.addEventListener("click", function (event) {
                event.stopPropagation()
            })
        })

        // No main link specified, grab the 1st link in the card
        if (!elMainLink) {
            [elMainLink] = links
        }

        if (!isTextSelected) {
            elMainLink.click()
        }
    })
})
