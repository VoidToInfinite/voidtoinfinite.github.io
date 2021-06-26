const navbar = document.querySelector('nav');

const changeNavStyleOnScroll = () => {
    if (window.pageYOffset > 200) {
        navbar.classList.add("sticky--top");
    } else {
        navbar.classList.remove("sticky--top");
    }
}

window.onscroll = function() {
    changeNavStyleOnScroll();
};
