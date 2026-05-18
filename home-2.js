
function toggleRTL() {
    document.body.classList.toggle("rtl-mode");
}

function toggleTheme() {

    document.body.classList.toggle("dark-mode");

    let themeBtn = document.querySelector(".theme-btn");

    if(document.body.classList.contains("dark-mode")){
        themeBtn.innerHTML = "☀";
    } else {
        themeBtn.innerHTML = "☾";
    }
}

/* Navbar Scroll */

window.addEventListener("scroll", function () {

    let navbar = document.querySelector(".navbar");

    navbar.classList.toggle("scrolled", window.scrollY > 50);

});


/* Hamburger Menu */

const hamburger = document.getElementById("hamburger");

const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    if(navLinks.classList.contains("active")){
        hamburger.innerHTML = "✖";
    } else {
        hamburger.innerHTML = "☰";
    }

});