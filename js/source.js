(function() {
    'use strict';
    
    var currentLoc = document.location.href;
    var nav_links = Array.prototype.slice.call(document.querySelectorAll('.nav-links'));

    nav_links.forEach(function(linkEl) {
        if (currentLoc === linkEl.href) {
console.log(currentLoc);
            linkEl.style.cursor = "default";
            linkEl.style.textDecoration = "none";
        }
    });
})();
