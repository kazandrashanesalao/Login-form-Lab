document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const successMessage = document.getElementById('successMessage');

    let isValid = true;

    // Email Validation
    if (!email.value || !email.validity.valid) {
        emailError.textContent = "Please enter a valid email address.";
        emailError.style.display = "block";
        email.style.borderColor = "#e74c3c";
        isValid = false;
    } else {
        emailError.style.display = "none";
        email.style.borderColor = "#e1e1e1";
    }

    // Password Validation
    if (password.value.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters long.";
        passwordError.style.display = "block";
        password.style.borderColor = "#e74c3c";
        isValid = false;
    } else {
        passwordError.style.display = "none";
        password.style.borderColor = "#e1e1e1";
    }

    // Success Handling
    if (isValid) {
        successMessage.textContent = "Login successful! Redirecting...";
        successMessage.style.display = "block";
        
        // Clear form
        email.value = "";
        password.value = "";
    } else {
        successMessage.style.display = "none";
    }
});
