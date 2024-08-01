document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    document.getElementById('nameError').style.display = 'none';
    document.getElementById('emailError').style.display = 'none';
    document.getElementById('passwordError').style.display = 'none';
    document.getElementById('confirmPasswordError').style.display = 'none';

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();

    let valid = true;

    if (name === '') {
        document.getElementById('nameError').innerText = 'Name is required.';
        document.getElementById('nameError').style.display = 'block';
        valid = false;
    }

    if (email === '') {
        document.getElementById('emailError').innerText = 'Email is required.';
        document.getElementById('emailError').style.display = 'block';
        valid = false;
    }

    if (password === '') {
        document.getElementById('passwordError').innerText = 'Password is required.';
        document.getElementById('passwordError').style.display = 'block';
        valid = false;
    }

    if (confirmPassword === '') {
        document.getElementById('confirmPasswordError').innerText = 'Confirm Password is required.';
        document.getElementById('confirmPasswordError').style.display = 'block';
        valid = false;
    } else if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').innerText = 'Passwords do not match.';
        document.getElementById('confirmPasswordError').style.display = 'block';
        valid = false;
    }

    if (valid) {
        alert("Registration successful!");
        window.location.href = 'login.html'; 
    }
});