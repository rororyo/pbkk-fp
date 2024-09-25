document.getElementById('loginForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('http://localhost:4000/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password
            }),
            credentials: 'include' // This is important to ensure cookies are sent with the request
        });

        const result = await response.json();

        if (response.ok) {
            alert(result.message);
            // Redirect the user after a successful login
            window.location.href = '/'; // Change to your desired redirect route
        } else {
            alert(result.message || 'Login failed');
        }
    } catch (error) {
        alert('Error during login. Please try again later.');
    }
});
