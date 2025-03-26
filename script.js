// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    if (lastScrollY < window.scrollY) {
        navbar.style.transform = 'translateY(-100%)'; // Hide navbar on scroll down
    } else {
        navbar.style.transform = 'translateY(0)'; // Show navbar on scroll up
    }
    lastScrollY = window.scrollY;
});

// Add fade-in animation for elements
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target); // Stop observing once animation is triggered
        }
    });
}, observerOptions);

// Observe all sections and project tiles
document.querySelectorAll('section, .project-tile').forEach(el => {
    el.classList.add('hidden');
    observer.observe(el);
}); 


