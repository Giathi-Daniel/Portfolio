

// MixItUp
var mixer = mixitup('.portfolio-gallery');

// Active Menu
let menuLi = document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section');

function activeMenu(){
    let len = section.length;
    while(--len && window.scrollY + 97 < section[len].offsetTop){}
    menuLi.forEach(sec => sec.classList.remove("active"));
    menuLi[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll",activeMenu);

// Sticky Navbar
const header = document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY > 50)
})

// Toggle icon
let menuIcon = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menuIcon.onclick = ()=>{
    menuIcon.classList.toggle("bx-x");
    navlist.classList.toggle("open");
}

window.onscroll = ()=>{
    menuIcon.classList.remove("bx-x");
    navlist.classList.remove("open");
}

// Parallax
const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show-items");
        }  else {
            entry.target.classList.remove("show-items");
        }
    });
});

const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el)=>observer.observe(el));

const scrollBottom = document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((el)=>observer.observe(el));

const scrollTop = document.querySelectorAll(".scroll-top");
scrollTop.forEach((el)=>observer.observe(el));

// ==============  Scroll reveal ================
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .about-content, .heading, .main-text, .skill-left, .main-text', { origin: 'top' });
ScrollReveal().reveal('.img-box, .service-box, .port-content, .port-box, .skill-right', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .img-about', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content p', { origin: 'right' });


// ==============  Text Animation ================
const typed = new Typed('.multiple-text', {
    strings: ['Fronted Developer', 'Freelancer', 'Mobile-Developer', 'Graphic Designer', 
               'C++ programmer', 'Game Developer', 'Java Programmer'],
    typeSpeed: 50,
    backSpeed: 40,
    backdelay: 100,
    loop: true
});