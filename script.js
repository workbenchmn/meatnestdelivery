// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.nav-item');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');
    
    // Mobile menu toggle
    mobileMenuBtn.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
    
    // Navigation item click handling
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const target = this.getAttribute('data-target');
            
            // Remove active class from all items
            navItems.forEach(i => i.classList.remove('active'));
            
            // Add active class to clicked item
            this.classList.add('active');
            
            // Handle navigation actions
            if (target === 'home') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else if (target === 'shop') {
                document.getElementById('categories').scrollIntoView({ behavior: 'smooth' });
            } else if (target === 'about') {
                document.getElementById('aboutModal').classList.add('active');
            } else if (target === 'contact') {
                document.getElementById('contactModal').classList.add('active');
            }
            
            // Close mobile menu after click
            navMenu.classList.remove('active');
        });
    });
    
    // Category accordion functionality
    const categoryHeaders = document.querySelectorAll('.category-header');
    
    categoryHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            const content = document.getElementById(`${category}-content`);
            const icon = this.querySelector('.category-icon');
            
            // Toggle active class on content
            content.classList.toggle('active');
            
            // Change icon based on state
            if (content.classList.contains('active')) {
                icon.textContent = '▲';
            } else {
                icon.textContent = '▼';
            }
        });
    });
    
    // Modal functionality
    const aboutModal = document.getElementById('aboutModal');
    const contactModal = document.getElementById('contactModal');
    const closeAboutModal = document.getElementById('closeAboutModal');
    const closeContactModal = document.getElementById('closeContactModal');
    const contactForm = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    
    // Close modals
    closeAboutModal.addEventListener('click', function() {
        aboutModal.classList.remove('active');
    });
    
    closeContactModal.addEventListener('click', function() {
        contactModal.classList.remove('active');
    });
    
    // Click outside modal to close
    aboutModal.addEventListener('click', function(e) {
        if (e.target === aboutModal) {
            aboutModal.classList.remove('active');
        }
    });
    
    contactModal.addEventListener('click', function(e) {
        if (e.target === contactModal) {
            contactModal.classList.remove('active');
        }
    });
    
    // Form submission
    contactForm.addEventListener('submit', function(e) {
        
        // Change button to show success
        submitBtn.classList.add('sent');
        submitBtn.textContent = 'Sent!';
        
        // Reset form after 2 seconds
        setTimeout(function() {
            contactForm.reset();
            submitBtn.classList.remove('sent');
            submitBtn.textContent = 'Send Message';
            contactModal.classList.remove('active');
        }, 2000);
    });
});

