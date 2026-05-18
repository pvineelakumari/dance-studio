
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

window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".navbar");

    navbar.classList.toggle("scrolled", window.scrollY > 50);
});