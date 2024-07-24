document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    if (!document.getElementById('terms').checked) {
        alert('You must agree to the terms and conditions');
        return;
    }

    document.getElementById('successMessage').textContent = 'Registration successful!';
    document.getElementById('registrationForm').reset();
});
