// Basic functionality
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Active navigation highlighting
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    // Skill card hover effects
    document.querySelectorAll('.skill-card').forEach(card => {
        card.addEventListener('mouseenter', () => card.style.transform = 'translateY(-5px)');
        card.addEventListener('mouseleave', () => card.style.transform = 'translateY(0)');
    });
});

// Navigation
function navigateTo(page) {
    window.location.href = page;
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.textContent = message;
    
    const colors = {
        success: '#4caf50',
        error: '#f44336',
        info: '#2196f3'
    };
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${colors[type] || colors.info};
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => notification.style.transform = 'translateX(0)', 100);
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => document.body.removeChild(notification), 300);
    }, 3000);
}

// Course functions
function startCourse(courseType) {
    showNotification(`Starting ${courseType} course!`, 'success');
}

function startModule(moduleName) {
    showNotification(`Starting ${moduleName} module`, 'info');
}

// Login functionality
function togglePassword() {
    const passwordInput = document.getElementById('password');
    const passwordIcon = document.getElementById('passwordIcon');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        passwordIcon.classList.remove('fa-eye');
        passwordIcon.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        passwordIcon.classList.remove('fa-eye-slash');
        passwordIcon.classList.add('fa-eye');
    }
}

function handleLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const remember = document.getElementById('remember').checked;
    
    // Simple validation
    if (!email || !password) {
        showNotification('Please fill in all fields', 'error');
        return;
    }
    
    // Simulate login process
    showNotification('Signing in...', 'info');
    
    setTimeout(() => {
        // Simulate successful login
        showNotification('Login successful! Welcome back!', 'success');
        
        // Store login state if remember me is checked
        if (remember) {
            localStorage.setItem('skilify_remember', 'true');
            localStorage.setItem('skilify_user_email', email);
        }
        
        // Redirect to dashboard or home page
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1500);
    }, 1000);
}

function showSignupForm() {
    showNotification('Signup form coming soon!', 'info');
}

// Initialize login form if it exists
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
        
        // Check if user chose to be remembered
        if (localStorage.getItem('skilify_remember') === 'true') {
            const email = localStorage.getItem('skilify_user_email');
            if (email) {
                document.getElementById('email').value = email;
                document.getElementById('remember').checked = true;
            }
        }
    }
});

// Export for other pages
window.Skilify = { navigateTo, showNotification, startCourse, startModule, togglePassword, handleLogin, showSignupForm };
