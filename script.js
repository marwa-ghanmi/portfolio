const typed = new Typed(".multiple-text", {
strings: [
"Full Stack Developer",
"WordPress Expert",
"Angular Developer"
],
typeSpeed: 100,
backSpeed: 60,
loop: true
});

// menu mobile
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
navbar.classList.toggle('active');
};
