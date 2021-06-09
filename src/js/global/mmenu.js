/**
 * mmenu-light
 * The "lightweight" version of mmenu
 */

import "mmenu-light/dist/mmenu-light.js"

document.addEventListener (
    "DOMContentLoaded", () => {
        const menu = new MmenuLight(
            document.querySelector("#js-masthead__nav"),
            "(max-width: 767px)"
        )

        const navigator = menu.navigation(
            {
                theme: "",
                title: "Handbook"
            }
        )
        const drawer = menu.offcanvas()

        document.querySelector( "a[href='#js-masthead__nav']" )
            .addEventListener( "click", ( evnt ) => {
                evnt.preventDefault();
                drawer.open();
            })
    }
)
