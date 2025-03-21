import React, { useState } from 'react';

const Login = () => {
  // Array of users (simulating a user database)
  const users = [
    { email: 'usera@example.com', password: 'password123' },
    { email: 'userb@example.com', password: 'password456' },
  ];

  // State to handle form input and error message
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the email and password match any user in the array
    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      // Login successful
      alert('Login successful!');
      setErrorMessage('');
    } else {
      // Login failed
      setErrorMessage('Invalid email or password.');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>

      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};

export default Login;
