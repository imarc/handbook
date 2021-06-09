/**
 * headroom.js
 * https://github.com/WickyNilliams/headroom.js
 */

import Headroom from "headroom.js";

const masthead = document.querySelector(".masthead");

var options = {
    tolerance: 0,
    classes: {
        initial: "masthead",
        pinned: "masthead--pinned",
        unpinned: "masthead--unpinned",
        top : "masthead--top",
        notTop : "masthead--not-top",
        bottom : "masthead--bottom",
        notBottom : "masthead--not-bottom",
        frozen: "masthead--frozen",
    },
}

const headroom = new Headroom(masthead, options)

headroom.init();
