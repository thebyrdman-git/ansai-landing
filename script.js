// Ansai Landing Page Scripts

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form submission handling
const form = document.querySelector('.signup-form');
if (form) {
    form.addEventListener('submit', function(e) {
        // Formspree will handle the actual submission
        // You can add custom tracking here
        console.log('Email signup submitted');
        
        // Optional: Add analytics tracking
        if (typeof gtag !== 'undefined') {
            gtag('event', 'signup', {
                'event_category': 'engagement',
                'event_label': 'email_signup'
            });
        }
    });
}

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeIn 1s ease-in';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all feature cards and audience cards
document.querySelectorAll('.feature-card, .audience-card, .step').forEach(el => {
    observer.observe(el);
});

// Optional: Add typing effect to hero subtitle (uncomment if desired)
/*
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

window.addEventListener('load', () => {
    const subtitle = document.querySelector('.hero-subtitle');
    if (subtitle) {
        const text = subtitle.textContent;
        typeWriter(subtitle, text);
    }
});
*/

// Console Easter Egg
console.log('%c🤖 Ansai', 'font-size: 24px; font-weight: bold; color: #3b82f6;');
console.log('%cAnsible automation for AI development', 'font-size: 14px; color: #6b7280;');
console.log('%cInterested in contributing? Check out our GitHub!', 'font-size: 12px; color: #8b5cf6;');


