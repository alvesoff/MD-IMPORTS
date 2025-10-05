// Typewriter Effect
function initTypewriterEffect() {
    const text = "🔥 iPhones novos e seminovos com garantia e preços que cabem no seu bolso! Seu Proximo upgrade está aqui! 📱✨";
    const element = document.getElementById('typewriter-text');
    
    if (!element) return;
    
    let index = 0;
    element.classList.add('typewriter-cursor');
    
    function typeWriter() {
        if (index < text.length) {
            element.innerHTML = text.slice(0, index + 1);
            index++;
            
            // Velocidade variável para diferentes caracteres
            let speed = 50;
            if (text[index - 1] === ' ') speed = 30;
            if (text[index - 1] === '!' || text[index - 1] === '.') speed = 200;
            if (text[index - 1] === '🔥' || text[index - 1] === '📱' || text[index - 1] === '✨') speed = 100;
            
            setTimeout(typeWriter, speed);
        } else {
            // Remove cursor after typing is complete
            setTimeout(() => {
                element.classList.remove('typewriter-cursor');
            }, 1000);
        }
    }
    
    // Start typing after a delay
    setTimeout(typeWriter, 800);
}

// Button Animations
function initButtonAnimations() {
    const buttons = document.querySelectorAll('.link-button');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.05)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
        
        button.addEventListener('click', function() {
            this.style.transform = 'translateY(-2px) scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'translateY(-5px) scale(1.05)';
            }, 150);
        });
    });
}

// Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all animated elements
    const animatedElements = document.querySelectorAll('.link-button, .hero-content');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Parallax Effect
function initParallaxEffect() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.floating-element');
        
        parallaxElements.forEach((element, index) => {
            const speed = 0.5 + (index * 0.1);
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initTypewriterEffect();
    initButtonAnimations();
    initScrollAnimations();
    initParallaxEffect();
    
    // Add smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';
    
    console.log('Landing page inicializada com sucesso!');
});