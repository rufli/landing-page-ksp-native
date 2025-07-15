// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mainNav = document.getElementById('mainNav');

if (mobileMenuBtn && mainNav) {
    mobileMenuBtn.addEventListener('click', () => {
        mainNav.classList.toggle('active');
    });
}

// Set Active Navigation Link Based on Current Page
function setActiveNavLink() {
    const navLinks = document.querySelectorAll('nav ul li a');
    const currentPath = window.location.pathname;
    
    navLinks.forEach(link => link.classList.remove('active'));
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        
        if (href === currentPath || 
            (currentPath === '/' && href === '/') ||
            (currentPath === '/index.html' && href === '/') ||
            (currentPath === '/' && href === '/index.html')) {
            link.classList.add('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', setActiveNavLink);

const navLinks = document.querySelectorAll('nav ul li a');
const sections = document.querySelectorAll('section[id]');

navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        if (href.startsWith('#')) {
            e.preventDefault();
            const targetElement = document.querySelector(href);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        } else if (href.startsWith('/#')) {
            e.preventDefault();
            const targetId = href.substring(1);
            
            if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            } else {
                
                window.location.href = '/' + targetId;
            }
        }
        if (mainNav?.classList.contains('active')) {
            mainNav.classList.remove('active');
        }
    });
});

// Scrollspy - only run on pages with sections
if (sections.length > 0) {
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY + 150;

        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');

            if (scrollPosition >= top && scrollPosition < top + height) {
                navLinks.forEach(link => link.classList.remove('active'));
                const activeLink = document.querySelector(`nav ul li a[href="#${id}"]`);
                if (activeLink) activeLink.classList.add('active');
            }
        });
    });
}

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header?.classList.add('scrolled');
    } else {
        header?.classList.remove('scrolled');
    }
});

// Testimonial Slider
const testimonials = document.querySelectorAll('.testimonial');
const dots = document.querySelectorAll('.slider-dot');
let currentSlide = 0;

function showSlide(index) {
    testimonials.forEach(t => t.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));
    testimonials[index]?.classList.add('active');
    dots[index]?.classList.add('active');
    currentSlide = index;
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => showSlide(index));
});

if (testimonials.length > 0) {
    setInterval(() => {
        currentSlide = (currentSlide + 1) % testimonials.length;
        showSlide(currentSlide);
    }, 5000);
}

// Contact Form Submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = this.querySelector('#name')?.value || '';
        alert(`Terima kasih ${name}! Pesan Anda telah terkirim. Kami akan segera menghubungi Anda.`);
        this.reset();
    });
}