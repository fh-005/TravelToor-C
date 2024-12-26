const menuBtn = document.querySelector("#menu-btn");
const menuBtnIcon = document.querySelector("#menu-btn i");
const navLinks = document.querySelector(".nav__links");

menuBtn.addEventListener("click", function(){
    navLinks.classList.toggle("open");
    
    let isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute(
        "class",
        isOpen ? "ri-close-line" : "ri-menu-3-line"
    )    
})