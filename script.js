const loginForm = document.getElementById('loginForm');
const passInput = document.getElementById('password');
const toggleBtn = document.getElementById('toggleBtn');

// Toggle Password Visibility
toggleBtn.addEventListener('click', () => {
    const isPassword = passInput.type === 'password';
    passInput.type = isPassword ? 'text' : 'password';
    toggleBtn.textContent = isPassword ? 'Hide' : 'Show';
});

// Validation
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const user = document.getElementById('username').value.trim();
    const pass = passInput.value.trim();

    document.getElementById('userError').style.display = user ? 'none' : 'block';
    document.getElementById('passError').style.display = pass ? 'none' : 'block';

    if (user && pass) {
        document.getElementById('successMsg').style.display = 'block';
        loginForm.reset();
    }
});