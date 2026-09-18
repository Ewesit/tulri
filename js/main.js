document.addEventListener('DOMContentLoaded', function() {
    
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    const navLinks = document.querySelectorAll('.main-nav a');

    // 1. Toggle menu open/close
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            mainNav.classList.toggle('active');
            
            // Prevent the background page from scrolling when menu is open
            document.body.style.overflow = mainNav.classList.contains('active') ? 'hidden' : 'auto';
        });
    }

    // 2. Close menu automatically when ANY link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Close the menu and reset the hamburger icon
            menuToggle.classList.remove('active');
            mainNav.classList.remove('active');
            document.body.style.overflow = 'auto';
            
            // Note: CSS 'scroll-behavior: smooth' in style.css will automatically 
            // handle smooth scrolling if the link is an anchor (e.g., href="#section")
        });
    });

    // 3. Close menu if the user clicks outside of it (on the background)
    document.addEventListener('click', function(event) {
        if (mainNav.classList.contains('active') && 
            !mainNav.contains(event.target) && 
            !menuToggle.contains(event.target)) {
            
            menuToggle.classList.remove('active');
            mainNav.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    // 4. Highlight active page in navigation
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    navLinks.forEach(item => {
        const href = item.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            item.classList.add('active');
        }
    });
});