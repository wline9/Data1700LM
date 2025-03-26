import { bindEvents } from "./events.js";
import { loadCyborgs } from "./cyborg.js";

$(document).ready(function() {
    bindEvents();
    loadCyborgs();
});
