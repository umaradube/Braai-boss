lucide.createIcons();

        function scrollTo(id) {
            document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
            document.getElementById('mobileMenu').classList.remove('active');
        }

        function toggleMenu() {
            document.getElementById('mobileMenu').classList.toggle('active');
        }

        window.addEventListener('scroll', function() {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 50) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        });
