// Generate and display captcha on load
function generateCaptcha() {
    const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let captcha = "";
    for (let i = 0; i < 4; i++) {
        captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    document.querySelector('.captcha-display').textContent = captcha;
}

// Initialize captcha
document.addEventListener('DOMContentLoaded', function() {
    generateCaptcha();
    
    // Refresh captcha
    document.querySelector('.refresh-captcha').addEventListener('click', generateCaptcha);
    
    // Form submission handler
    document.getElementById("consultation-form").addEventListener("submit", function(e) {
        e.preventDefault();
        
        // Form validation
        const name = document.querySelector('input[placeholder="Name"]').value;
        const phone = document.querySelector('input[placeholder="Mobile Number"]').value;
        const captcha = document.querySelector('input[placeholder="Enter Captcha"]').value;
        const checkbox = document.querySelector('.form-checkbox input');
        
        if (!name || !phone || !captcha || !checkbox.checked) {
            alert("Please fill all fields and agree to terms");
            return;
        }
        
        // Form submission logic would go here
        alert("Thank you! Your consultation request has been received.");
        
        // Reset form
        this.reset();
        generateCaptcha();
    });

    // Service buttons click handlers
    document.querySelectorAll('.service-btn').forEach(button => {
        button.addEventListener('click', function() {
            // Scroll to consultation form
            document.querySelector('.form-container').scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Book appointment buttons in header and overlay
    document.querySelectorAll('.btn-orange').forEach(button => {
        button.addEventListener('click', function() {
            document.querySelector('.form-container').scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Why Choose Section Interactions
    const featureCards = document.querySelectorAll('.feature-card');
    
    const animateOnScroll = () => {
        featureCards.forEach(card => {
            const cardPosition = card.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if(cardPosition < screenPosition) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial state for animation
    featureCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease';
    });
    
    // Run on load and scroll
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);
});