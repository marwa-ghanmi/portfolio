// Typed JS
new Typed(".multiple-text", {
  strings: ["Développeuse Web", "Backend Developer", "WordPress Expert", "Node.js Developer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});

// MENU
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    navbar.classList.toggle('active');
};

// SCROLL ACTIVE LINK
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  let top = window.scrollY;

  sections.forEach(sec => {
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => link.classList.remove("active"));
      document.querySelector(`header nav a[href*=${id}]`).classList.add("active");
    }
  });
};

// FORM
const form = document.getElementById('contactForm');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const response = document.getElementById('formResponse');
    response.innerText = "Message envoyé avec succès ✅";
    response.style.color = "#C9A227";

    form.reset();
});
