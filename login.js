// DOM Elements
const loginFormContainer = document.getElementById('login-form-container');
const registerFormContainer = document.getElementById('register-form-container');

const showRegisterLink = document.getElementById('show-register');
const showLoginLink = document.getElementById('show-login');

const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');

const loginUsernameInput = document.getElementById('login-username');
const loginPasswordInput = document.getElementById('login-password');

const registerUsernameInput = document.getElementById('register-username');
const registerPasswordInput = document.getElementById('register-password');
const registerConfirmPasswordInput = document.getElementById('register-confirm-password');


// Switch to Register Form
showRegisterLink.addEventListener('click', () => {
    loginFormContainer.style.display = 'none';
    registerFormContainer.style.display = 'block';
});

// Switch to Login Form
showLoginLink.addEventListener('click', () => {
    registerFormContainer.style.display = 'none';
    loginFormContainer.style.display = 'block';
});

// Load Users from localStorage
function loadUsers() {
    const storedUsers = localStorage.getItem('users');
    return storedUsers ? JSON.parse(storedUsers) : [];
}

// Save Users to localStorage
function saveUsers(users) {
    localStorage.setItem('users', JSON.stringify(users));
}

// Login Form Submit
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = loginUsernameInput.value.trim();
    const password = loginPasswordInput.value.trim();

    const users = loadUsers();
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        // Login successful
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        window.location.href = 'index.html';
    } else {
        alert('Invalid username or password.');
    }
});

// Register Form Submit
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = registerUsernameInput.value.trim();
    const password = registerPasswordInput.value.trim();
    const confirmPassword = registerConfirmPasswordInput.value.trim();

    if (!username || !password || !confirmPassword) {
        alert('Please fill in all fields.');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    const users = loadUsers();
    if (users.find(u => u.username === username)) {
        alert('Username already taken. Please choose another.');
        return;
    }

    // Register new user
    const newUser = { username, password };
    users.push(newUser);
    saveUsers(users);
    alert('Registration successful! You can now log in.');
    
    // Switch to login form
    registerFormContainer.style.display = 'none';
    loginFormContainer.style.display = 'block';
});




