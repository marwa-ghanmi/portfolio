// Typed JS
  const typed = new Typed(".multiple-text", {
    strings: ["Frontend Developer", "Backend Developer", "Full Stack Developer", "Web Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    backDelay: 1000,
    loop: true
  });

// Menu Toggle
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-x');
    navbar.classList.toggle('active');
};

// Scroll Sections Active Link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    // Sticky Navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Remove menu icon navbar when click navbar link (scroll)
    menuIcon.classList.remove('fa-x');
    navbar.classList.remove('active');
};

// Scroll Reveal
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .projects-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// Form Submission
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const phone = form.querySelector('input[type="number"]').value;
    const subject = form.querySelectorAll('input[type="text"]')[1].value;
    const message = form.querySelector('textarea').value;
    
    // Here you would typically send the data to a server
    console.log({ name, email, phone, subject, message });
    
    // Show success message
    alert('Message sent successfully!');
    form.reset();
});

// Animate skill bars on scroll and hover
const skillBars = document.querySelectorAll(".skill-level");
const skillsBoxes = document.querySelectorAll(".skills-box");

skillBars.forEach((bar) => {
  const width = bar.style.width;
  bar.style.setProperty("--target-width", width);
  bar.style.width = "0%";
  bar.textContent = "0%"; // Start at 0%
});

// Function to animate the counter text
function animateCounter(bar, target) {
  let current = 0;
  const duration = 1000; // 1 second to match CSS transition
  const start = performance.now();

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    
    // Smooth easing for the number
    const currentCount = Math.floor(progress * target);
    bar.textContent = currentCount + "%";

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      bar.textContent = target + "%";
    }
  }
  requestAnimationFrame(update);
}

// Add hover listeners to each skills box
skillsBoxes.forEach((box) => {
  const bar = box.querySelector(".skill-level");
  const targetWidth = parseInt(bar.style.getPropertyValue("--target-width"));

  box.addEventListener("mouseenter", () => {
    animateCounter(bar, targetWidth);
  });

  box.addEventListener("mouseleave", () => {
    bar.textContent = "0%";
  });
});

// Animate when section first appears (Original scroll logic)
function animateSkillBars() {
  skillBars.forEach((bar) => {
    const width = bar.style.getPropertyValue("--target-width");
    bar.style.width = width;
    const target = parseInt(width);
    animateCounter(bar, target);
  });
}

// Intersection Observer for when skills section is visible
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateSkillBars();
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.4 }
);

document.querySelectorAll(".skills-box").forEach((box) => {
  observer.observe(box);
});

// Smooth scrolling for all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
