document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 


    document.getElementById('usernameError').style.display = 'none';
    document.getElementById('passwordError').style.display = 'none';


    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();


    let valid = true;
    
    if (username === '') {
        document.getElementById('usernameError').innerText = 'Username is required.';
        document.getElementById('usernameError').style.display = 'block';
        valid = false;
    }

    if (password === '') {
        document.getElementById('passwordError').innerText = 'Password is required.';
        document.getElementById('passwordError').style.display = 'block';
        valid = false;
    }

    if (!valid) return;
    
    
    if (username === 'Ajok Atem Beek' && password === '123456') {
        alert("Login successful!");
        window.location.href = 'courses.html'; 
    } else {
        alert("Invalid Username or Password");
    }
});