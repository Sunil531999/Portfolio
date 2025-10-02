document.addEventListener('DOMContentLoaded', function() {

    function applyTypingEffect(selector, text, options = {}) {
        const element = document.querySelector(selector);
        if (!element) return;

        const { speed = 150, useBrackets = false, cursorClass = 'typing-cursor' } = options;
        
        // Start with a blinking cursor in an empty element
        element.innerHTML = `<span><span class="text"></span><span class="${cursorClass}"></span></span>`;

        let i = 0;

        function type() {
            if (i < text.length) {
                const currentText = text.substring(0, i + 1);
                let content = `<span><span class="text">${currentText}</span><span class="${cursorClass}"></span></span>`;
                if (useBrackets) {
                    content = `<span class="bracket">&lt;</span>${content}`;
                }
                element.innerHTML = content;
                i++;
                setTimeout(type, speed);
            } else {
                // Keep the cursor blinking at the end of the text
                element.innerHTML = `<span><span class="text">${text}</span><span class="${cursorClass}"></span></span>`;
            }
        }

        type();
    }

    particlesJS('particles-js',
    {
        "particles": {
            "number": {
                "value": 40,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#64ffda"
            },
            "shape": {
                "type": ["circle", "triangle", "edge"],
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                }
            },
            "opacity": {
                "value": 0.5,
                "random": true,
                "animation": {
                    "enable": true,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "animation": {
                    "enable": true,
                    "speed": 2,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#64ffda",
                "opacity": 0.2,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 1.5,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "bounce",
                "bounce": false,
                "attract": {
                    "enable": true,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": { "onhover": { "enable": true, "mode": "grab" }, "onclick": { "enable": true, "mode": "push" }, "resize": true },
            "modes": { "grab": { "distance": 140, "line_linked": { "opacity": 0.5 } }, "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 }, "repulse": { "distance": 200, "duration": 0.4 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 } }
        },
        "retina_detect": true
    });

    // Set up the portfolio title for the bracket reveal animation
    const portfolioTitle = document.getElementById('portfolio');
    portfolioTitle.innerHTML = `<span class="bracket left-bracket">&lt;</span><span class="portfolio-text">PORTFOLIO</span><span class="bracket right-bracket">&gt;</span>`;

    applyTypingEffect('.main-title', 'Sunil Kumar Sharma', { speed: 200, cursorClass: 'main-title-cursor' });

    // Add smooth scrolling for navigation links
    document.querySelectorAll('.nav_links a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const sectionId = this.getAttribute('href');
            const section = document.querySelector(sectionId);
            if (section) {
                e.preventDefault();
                section.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Randomize tech icon positions and animations for the loading screen
    const techIcons = document.querySelectorAll('.tech-icon');
    techIcons.forEach((icon) => {
        // Randomize starting position
        icon.style.top = `${Math.random() * 100}vh`;
        icon.style.left = `${Math.random() * 100}vw`;
    
        // Randomize animation properties
        const randomDuration = 8 + Math.random() * 12; // Duration between 8s and 20s
        const randomDelay = Math.random() * 5; // Delay up to 5s
        icon.style.animation = `float ${randomDuration}s ${randomDelay}s infinite ease-in-out, fade-in-out ${randomDuration}s ${randomDelay}s infinite ease-in-out`;
    });

    // Populate social links from the template
    const socialTemplate = document.getElementById('social-links');
    const socialContainers = document.querySelectorAll('.social-links, .footer-links');
    
    socialContainers.forEach(container => {
        container.appendChild(socialTemplate.content.cloneNode(true));
    });

    // Hamburger menu functionality
    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav_links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active'); // Also toggle the active class on the button
    });
    // Close menu when a link is clicked
    document.querySelectorAll('.nav_links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active'); // Ensure the button's active class is also removed
        });
    });

    // Close menu when clicking outside of it
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navLinks.contains(event.target);
        const isClickOnHamburger = hamburger.contains(event.target);

        // If the menu is active and the click is outside the nav and the hamburger button
        if (navLinks.classList.contains('active') && !isClickInsideNav && !isClickOnHamburger) {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once it's visible
            }
        });
    }, {
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    // Observe all elements with the .animate-on-scroll class
    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
    elementsToAnimate.forEach(el => observer.observe(el));

    // Resume Modal functionality
    const modal = document.getElementById('resume-modal');
    const resumeBtn = document.getElementById('resume-modal-trigger');
    const closeBtn = document.querySelector('.modal-close-button');

    // When the user clicks the button, open the modal 
    resumeBtn.onclick = function(e) {
        e.preventDefault(); // Prevent default anchor behavior
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal content, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

});

// Hide loading screen only after all page content (including images) is fully loaded
window.addEventListener('load', function() {
    const minimumLoaderTime = 4000; // Minimum 4 seconds
    const loadTime = Date.now() - performance.timing.navigationStart;
    const delay = Math.max(0, minimumLoaderTime - loadTime);

    // Add a delay to ensure the loading animation is visible for a minimum duration
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, delay);
});
