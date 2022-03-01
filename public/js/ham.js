const ham = document.querySelector(".burger-menu");
const enlaces = document.querySelector(".links-menu");

ham.addEventListener("click", function(){
    enlaces.classList.toggle("nav-activate")
})