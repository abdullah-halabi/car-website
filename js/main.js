let nav = document.getElementById("nav");
let link = document.getElementById("link");
let container = document.getElementById("container");
let a = document.getElementById("link").querySelectorAll(".a");
let header = document.getElementById("header");
let scroll = document.getElementById("myBtn");
// to featured
let all = document.getElementById("all");
let tesla = document.getElementById("tesla");
let audi = document.getElementById("audi");
let porsche = document.getElementById("porsche");
let allCar = document.getElementById("all-car");
let teslaCar = document.getElementById("all-car").querySelectorAll(".car-tesla");
const audiCar = document.getElementById("all-car").querySelectorAll(".example");
let porscheCar = document.getElementById("all-car").querySelectorAll(".car-porsche");

// start choose type car 

audiCar.onclick = function() {
    for (let i = 0; i < audiCar.length; i++) {
        audiCar[i].style.display = "none";
      }
}
// //////////////===> Initialize Swiper  <===//////////////
let swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween : 24,
    slidesPerView: "auto",
    grabCursor: true ,


    pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    },
    breakpoints: {
        768: {
        slidesPerView: 3,
        },
        1024: {
        spaceBetween: 48,
        },
    },
});














// start nav to small screen
nav.onclick = function() {
    link.style.display = "flex";
    header.style.backgroundColor = "#858181e6";
    link.classList.add("play");
    nav.className = "fa-solid fa-circle-xmark";
    container.style.justifyContent = "center";
    for (let i=0; i<= a.length; i++) {
        a[i].style.paddingRight = "0px";
    }
    
};
nav.onmousedown = function() {
    link.style.display = "none";
    container.style.justifyContent = "space-between";
    nav.className = "fa-solid fa-align-justify";
};

// scroll to top 
window.onscroll = function () {scrollFunction()} ; 

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scroll.style.display = "block";
    }
    else {
        scroll.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = "0";
    document.documentElement.scrollTop = "0";
}
// end scroll to top