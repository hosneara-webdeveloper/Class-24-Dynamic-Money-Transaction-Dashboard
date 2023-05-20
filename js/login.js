document.getElementById('login-button').addEventListener('click', function() {
    // we will get email from input

    const emailField = document.getElementById('email');
    const email = emailField.value;
    // we will get password from input
    const passwordField = document.getElementById('password');
    const password =passwordField.value; 
    if(email == 'admin@gmail.com' && password == 'password') {
        window.location = 'dashboard.html'
    }

})