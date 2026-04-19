document.addEventListener('DOMContentLoaded', () => {
    // 1. Smooth Scroll for Navigation
    const navLinks = document.querySelectorAll('.nav-links a, .btn-primary, .btn-outline, .footer-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // 2. Reveal Animations on Scroll
    const revealElements = document.querySelectorAll('.feature-card, .split-content, .hero-content, .hero-media, .form-container');
    
    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    };

    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver(revealCallback, options);

    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s cubic-bezier(0.165, 0.84, 0.44, 1)';
        observer.observe(el);
    });

    // 3. Navbar appearance on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });


    // 5. Form Logic (Simple Alert)
    const trialForm = document.querySelector('.trial-form');
    if (trialForm) {
        trialForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = trialForm.querySelector('button');
            const originalText = btn.innerText;
            btn.innerText = 'Joining the Blues...';
            btn.disabled = true;
            
            setTimeout(() => {
                alert('Welcome to Cityzens! Check your email for confirmation.');
                btn.innerText = originalText;
                btn.disabled = false;
                trialForm.reset();
            }, 1500);
        });
    }
});
