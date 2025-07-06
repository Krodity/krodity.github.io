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

// Custom cursor functionality
const cursor = document.createElement('div');
cursor.className = 'cursor';
document.body.appendChild(cursor);

// Track mouse movement and add hover effect
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    cursor.classList.add('hover');
});

// Remove hover effect when mouse leaves the window
document.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover');
});

// Add enhanced hover effect for interactive elements
const interactiveElements = document.querySelectorAll('a, button, .social-link, .selfie, li.skill, .exp, .education, .me, #welcome-section');
interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(3)';
        cursor.style.background = 'radial-gradient(circle, rgba(162, 89, 255, 0.9) 0%, rgba(162, 89, 255, 0.6) 30%, rgba(162, 89, 255, 0.3) 65%, transparent 100%)';
        cursor.style.boxShadow = '0 0 15px rgba(162, 89, 255, 0.8), 0 0 30px rgba(162, 89, 255, 0.6), 0 0 45px rgba(162, 89, 255, 0.4)';
    });
    
    el.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(2)';
        cursor.style.background = 'radial-gradient(circle, rgba(162, 89, 255, 0.8) 0%, rgba(162, 89, 255, 0.4) 30%, rgba(162, 89, 255, 0.2) 65%, transparent 100%)';
        cursor.style.boxShadow = '0 0 10px rgba(162, 89, 255, 0.6), 0 0 20px rgba(162, 89, 255, 0.4), 0 0 30px rgba(162, 89, 255, 0.2)';
    });
});

// Matrix light streaks functionality
function createMatrixStreak() {
    const streak = document.createElement('div');
    streak.className = 'matrix-streak';
    
    // Randomly choose horizontal or vertical
    const isVertical = Math.random() > 0.5;
    if (isVertical) {
        streak.classList.add('vertical');
        // Align to vertical grid lines (every 50px)
        const gridPosition = Math.floor(Math.random() * Math.ceil(window.innerWidth / 50)) * 50;
        streak.style.left = gridPosition + 'px';
        streak.style.top = '-100px';
    } else {
        // Align to horizontal grid lines (every 50px)
        const gridPosition = Math.floor(Math.random() * Math.ceil(window.innerHeight / 50)) * 50;
        streak.style.top = gridPosition + 'px';
        streak.style.left = '-100px';
    }
    
    // Random animation duration
    const duration = 2 + Math.random() * 3;
    streak.style.animationDuration = duration + 's';
    
    document.body.appendChild(streak);
    
    // Remove streak after animation
    setTimeout(() => {
        if (streak.parentNode) {
            streak.parentNode.removeChild(streak);
        }
    }, duration * 1000);
}

// Create streaks at random intervals
setInterval(createMatrixStreak, 200 + Math.random() * 300);

// Click ripple effect functionality
function createRipple(e) {
    const ripple = document.createElement('div');
    ripple.className = 'ripple';
    
    // Position ripple at exact cursor location and override CSS
    ripple.style.left = e.clientX + 'px';
    ripple.style.top = e.clientY + 'px';
    ripple.style.transform = 'translate(-50%, -50%)';
    
    document.body.appendChild(ripple);
    
    // Remove ripple after animation
    setTimeout(() => {
        if (ripple.parentNode) {
            ripple.parentNode.removeChild(ripple);
        }
    }, 1000);
}

// Add click event listener to document
document.addEventListener('click', (e) => {
    // Check if click target is a UI element
    const isUIElement = e.target.closest('a, button, .social-link, .selfie, li.skill, .exp, .education, .me, #welcome-section, #navbar');
    
    // Only create ripple if clicking on background (not UI elements)
    if (!isUIElement) {
        createRipple(e);
    }
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


