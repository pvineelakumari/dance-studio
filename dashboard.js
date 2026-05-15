// ================= SELECT ELEMENTS =================

const body = document.body;

const themeToggle = document.getElementById("themeToggle");

const rtlToggle = document.getElementById("rtlToggle");


// ================= DARK MODE =================

themeToggle.addEventListener("click", () => {

    body.classList.toggle("dark-mode");

    const icon = themeToggle.querySelector("i");

    if(body.classList.contains("dark-mode")){

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

    }else{

        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

    }

});


// ================= RTL MODE =================

rtlToggle.addEventListener("click", () => {

    body.classList.toggle("rtl");

});


// ================= ACTIVE SIDEBAR =================

const menuItems = document.querySelectorAll(".sidebar ul li");

menuItems.forEach(item => {

    item.addEventListener("click", () => {

        menuItems.forEach(remove => {

            remove.classList.remove("active");

        });

        item.classList.add("active");

    });

});