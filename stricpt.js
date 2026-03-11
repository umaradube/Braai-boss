document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide icons
    lucide.createIcons();

    const navbar = document.getElementById('navbar');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuBtn = document.getElementById('menuBtn');

    // 1. Handle Scroll Effect for Navbar
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Toggle Mobile Menu
    const toggleMenu = () => {
        mobileMenu.classList.toggle('active');
    };

    if (menuBtn) {
        menuBtn.addEventListener('click', toggleMenu);
    }

    // 3. Smooth Scrolling
    const scrollLinks = document.querySelectorAll('[data-scroll]');
    
    scrollLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('data-scroll');
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                // Close mobile menu if open
                mobileMenu.classList.remove('active');

                window.scrollTo({
                    top: targetSection.offsetTop - 80, // Offset for fixed nav
                    behavior: 'smooth'
                });
            }
        });
    });

    // 4. Form Submission Mockup
    const cateringForm = document.getElementById('cateringForm');
    if (cateringForm) {
        cateringForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your inquiry! The Braai Boss team will contact you shortly.');
            cateringForm.reset();
        });
    }
});