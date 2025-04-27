const wrapper = document.querySelector('.wrapper');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');

// Switch to Register Form
registerLink.onclick = () => {
    wrapper.classList.add('active');
    document.getElementById('loginError').textContent = ''; // Clear login error when switching to register form
};

// Switch to Login Form
loginLink.onclick = () => {
    wrapper.classList.remove('active');
    document.getElementById('signupError').textContent = ''; // Clear signup error when switching to login form
};

// Signup Script
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('signupUsername').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const errorElement = document.getElementById('signupError');

    if (password.length < 8) {
        errorElement.textContent = 'Password must be at least 8 characters long.';
        return;
    }

    // Store user data in localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    errorElement.textContent = 'Signup successful! Redirecting to login...';

    // Automatically redirect to login form after 1 second
    setTimeout(function() {
        wrapper.classList.remove('active'); // Switch to login form
        document.getElementById('signupError').textContent = ''; // Clear signup error
    }, 1000); // 1 second delay
});

// Login Script
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    const errorElement = document.getElementById('loginError');

    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    // Validate credentials
    if (username === storedUsername && password === storedPassword) {
        errorElement.textContent = 'Login successful! Redirecting...';
        
        // Introduce a 1-second delay before redirecting
        setTimeout(function() {
            window.location.href = 'main.html'; // Redirect to main page
        }, 1000); // 1 second delay
    } else {
        errorElement.textContent = 'Invalid username or password.';
    }
});
