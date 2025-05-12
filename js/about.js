document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.innerHTML = navLinks.classList.contains('active') ? 
            '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('fa-times');
        });
    });
    
    // Header scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Smooth scrolling for all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Timeline animation
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    function checkTimelineItems() {
        const triggerBottom = window.innerHeight / 5 * 4;
        
        timelineItems.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;
            
            if (itemTop < triggerBottom) {
                item.classList.add('visible');
            }
        });
    }
    
    // Initial check
    checkTimelineItems();
    
    // Check on scroll
    window.addEventListener('scroll', checkTimelineItems);
    
    // Team member hover effect enhancement
    const teamMembers = document.querySelectorAll('.team-member');
    
    teamMembers.forEach(member => {
        member.addEventListener('mouseenter', function() {
            this.querySelector('.social-links').style.opacity = '1';
            this.querySelector('.social-links').style.transform = 'translateY(0)';
        });
        
        member.addEventListener('mouseleave', function() {
            this.querySelector('.social-links').style.opacity = '0';
            this.querySelector('.social-links').style.transform = 'translateY(20px)';
        });
    });
    
    // Testimonial carousel functionality
    const testimonials = document.querySelector('.testimonials');
    if (testimonials) {
        let currentIndex = 0;
        const testimonialCards = document.querySelectorAll('.testimonial-card');
        const totalTestimonials = testimonialCards.length;
        
        function showTestimonial(index) {
            testimonialCards.forEach((card, i) => {
                card.style.display = i === index ? 'block' : 'none';
            });
        }
        
        // Auto-rotate testimonials
        setInterval(() => {
            currentIndex = (currentIndex + 1) % totalTestimonials;
            showTestimonial(currentIndex);
        }, 5000);
        
        // Initial display
        showTestimonial(currentIndex);
    }
    
    // Animate mission cards on scroll
    const missionCards = document.querySelectorAll('.mission-card');
    
    function animateMissionCards() {
        const triggerBottom = window.innerHeight / 5 * 4;
        
        missionCards.forEach((card, index) => {
            const cardTop = card.getBoundingClientRect().top;
            
            if (cardTop < triggerBottom) {
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, index * 200);
            }
        });
    }
    
    // Initial check
    animateMissionCards();
    
    // Check on scroll
    window.addEventListener('scroll', animateMissionCards);
    
    // Set initial styles for mission cards
    missionCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Set initial styles for team member social links
    document.querySelectorAll('.social-links').forEach(links => {
        links.style.opacity = '0';
        links.style.transform = 'translateY(20px)';
        links.style.transition = 'all 0.3s ease';
    });
});
