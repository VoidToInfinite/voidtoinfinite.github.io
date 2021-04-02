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
let header_height = header.offsetHeight;
let about_height = about.offsetHeight;
// 
// Create a static JSON data
// 
const enDataCardsJson = '{ "cards" : [' +
`{ "title":"VTI Learning" , "subTitle":"Increase your knowledge","description": "Get to know new methods and ways to carry your projects to make them come true, improve your weakness points and strengthen it with the help of experienced people or people that are learning, is more fun." },` +
`{ "title":"VTI Imagination" , "subTitle":"Light up your creativity","description": "Having fun with friends? Absolutely!<br>We are all aware that we can learn by playing and that's a fact." },` +
`{ "title":"VTI Gaming", "subTitle":"Good luck! Have fun.","description": "Imagine whichever creative concept taken from within you expresing emotions, spawning new sensations and visualising the message, it's something unique." } ]}`;
var dataCards = JSON.parse(enDataCardsJson);
// 
// Window load event
// 
window.addEventListener('load', () => {

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

    document.querySelector("#home").addEventListener('click', scrollToTop);
    document.querySelector("#about").addEventListener('click', scrollToAbout);
    document.querySelector("#contact").addEventListener('click', scrollToContactSection);

    document.querySelector(".presentation-btn").addEventListener('click', scrollToContactSection);

    toTopBtn.addEventListener('click', scrollToTop);

    for (let index = 0; index < cards.length; index++) {
        const element = cards[index];
        element.children[0].innerHTML = dataCards.cards[index].title;
        element.children[1].innerHTML = dataCards.cards[index].subTitle;
        element.children[2].innerHTML = dataCards.cards[index].description;
    }

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

});
// 
// Function to check if 
// 
const checkScrollPosition = async () => {
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
// Function to scroll behavior
// 
const scrollToTop = async () => {
    window.scrollTo({
        top: 0
    });
}

const scrollToAbout = async () => {
    window.scrollTo({
        top: about.offsetTop
    });
}

const scrollToContactSection = async () => {
    window.scrollTo({
        top: contactSection.offsetTop
    });
}
