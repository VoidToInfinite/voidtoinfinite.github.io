// 
// Global variables
// 
let isNavOpen = false;
// 
// HTML elements
// 
const header = document.querySelector(".hero-header");
const navbar = document.querySelector(".navbar");
const navbarList = document.querySelector(".navbar-items");
const presentationTitle = document.querySelector(".presentation");
const shadowToAbout = document.querySelector(".shadowToAbout");
const about = document.querySelector(".about");
const aboutSeparator = document.querySelector(".about-title-separator");
const cards = document.querySelectorAll(".card-content");
const contactSection = document.querySelector(".sec-contact");
const translate = document.querySelectorAll(".translate");
const menu = document.querySelector(".hamburger-menu");
const toTopBtn = document.querySelector(".toTop");
// 
// Get height of elements offset
// 
const header_height = header.offsetHeight;
const about_height = about.offsetHeight;
// 
// Function to scroll behavior
// 
const scrollToTop = () => {
    window.scrollTo({
        top: 0
    });
}

const scrollToAbout = () => {
    window.scrollTo({
        top: about.offsetTop
    });
}

const scrollToContactSection = () => {
    window.scrollTo({
        top: contactSection.offsetTop
    });
}
// 
// Function to check ScrollPosition
// 
const checkScrollPosition = () => {
    let scroll = window.pageYOffset;
    if (scroll < 200) {
        toTopBtn.classList.add('display-none');
        if (!isNavOpen) {
            navbar.classList.remove('navbar-scroll-style-light');
        }
    } else if (scroll >= 200) {
        toTopBtn.classList.remove('display-none');
        navbar.classList.add('navbar-scroll-style-light');
        navbar.classList.remove('navbar-scroll-style-dark');
    }
    if (scroll > (contactSection.offsetTop - 10)) {
        navbar.classList.remove('navbar-scroll-style-light');
        navbar.classList.add('navbar-scroll-style-dark');
    }
}
// 
// Window DOMContentLoaded event
// 
window.addEventListener('DOMContentLoaded', () => {

    document.querySelector("#home").addEventListener('click', scrollToTop);
    document.querySelector("#about").addEventListener('click', scrollToAbout);
    document.querySelector("#contact").addEventListener('click', scrollToContactSection);

    document.querySelector(".presentation-btn").addEventListener('click', scrollToContactSection);

    toTopBtn.addEventListener('click', scrollToTop);

    menu.addEventListener('click', () => {
        let scroll = window.pageYOffset;
    
        if (isNavOpen) {
            if (scroll < 200) {
                navbar.classList.remove('navbar-scroll-style-light');
            }
            navbarList.style.display = 'none';
            isNavOpen = false;
        }else {
            if (scroll < 200) {
                navbar.classList.add('navbar-scroll-style-light');
            }
            navbarList.style.display = 'block';
            isNavOpen = true;
        }
    });

    checkScrollPosition();

});
// 
// Window resize event
// 
window.addEventListener('resize', () => {
    if (window.innerWidth > 1200) {
        isNavOpen = false;
    }
});
// 
// Window scroll event
// 
window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset;
    let aboutY = about.getBoundingClientRect();

    translate.forEach(element => {
        let speed = element.dataset.speed;
        element.style.transform = `translateY(${scroll * speed}px)`;
    });
    
    presentationTitle.style.opacity = - scroll / (header_height / 2) + 1;
    
    shadowToAbout.style.height = `${scroll * 0.5 + 300}px`;

    aboutSeparator.style.width = `${scroll / (aboutY.top + about_height) * 30}%`;
    
    checkScrollPosition();

});
