document.addEventListener('DOMContentLoaded', () => {
    const dynamicText = document.getElementById('dynamic-text');
    const roles = ['Sales', 'Managers', 'Recruiters', 'Coaches', 'Athletes'];
    let currentIndex = 0;

    function rotateText() {
        dynamicText.style.opacity = 0;
        dynamicText.style.transform = 'translateY(10px)';
        
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % roles.length;
            dynamicText.textContent = roles[currentIndex];
            dynamicText.style.opacity = 1;
            dynamicText.style.transform = 'translateY(0)';
        }, 500);
    }

    // Set initial transition
    dynamicText.style.transition = 'all 0.5s ease-in-out';
    
    // Interval for rotation
    setInterval(rotateText, 3000);

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
            navbar.style.borderBottom = '1px solid #E2E8F0';
        } else {
            navbar.style.boxShadow = 'none';
            navbar.style.borderBottom = '1px solid transparent';
        }
    });

    // Reveal animations on scroll
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.feature-card').forEach(card => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });
});
