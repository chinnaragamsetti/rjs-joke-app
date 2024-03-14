import React, { useState } from "react";
import { useHistory } from "react-router-dom"; // Import useHistory hook for redirecting

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory(); // Initialize useHistory hook

  const handleLogin = () => {
    // Dummy credentials
    const dummyUsername = "admin";
    const dummyPassword = "password";

    // Check if username and password match dummy credentials
    if (username === dummyUsername && password === dummyPassword) {
      // Redirect to homepage on successful login
      history.push("/homepage");
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" className="btn btn-primary" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
