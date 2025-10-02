document.addEventListener('DOMContentLoaded', function() {

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
    techIcons.forEach(icon => {
        const randomTop = Math.random() * 100; // 0-100% of viewport height
        const randomLeft = Math.random() * 100; // 0-100% of viewport width
        const randomDelay = Math.random() * 5; // 0-5 seconds delay
        const randomDuration = 8 + Math.random() * 7; // 8-15 seconds duration

        icon.style.top = `${randomTop}vh`;
        icon.style.left = `${randomLeft}vw`;
        icon.style.animationDelay = `${randomDelay}s`;
        icon.style.animationDuration = `${randomDuration}s, ${randomDuration}s`; // Apply to both float and fade-in-out
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
        if (navLinks.classList.contains('active')) {
            hamburger.innerHTML = '&times;'; // Change to 'X'
        } else {
            hamburger.innerHTML = '&#9776;'; // Change back to hamburger
        }
    });
    // Close menu when a link is clicked
    document.querySelectorAll('.nav_links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active'); // Ensure the button's active class is also removed
            hamburger.innerHTML = '&#9776;';
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
            hamburger.innerHTML = '&#9776;';
        }
    });
});

// Hide loading screen only after all page content (including images) is fully loaded
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});
