import { useState } from "react";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:8080/api/auth/login",
        { email, password }
      );

      if (res.data === "Login successful") {
        localStorage.setItem("token", "logged-in");
        window.location.href = "/dashboard";
      } else {
        setMessage("Invalid credentials");
      }

    } catch (err) {
      setMessage("Login failed");
    }
  };

  return (
    <div className="container">
      <div className="card">
      <h2>Login</h2>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        /><br/><br/>

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        /><br/><br/>

        <button type="submit">Login</button>
      </form>

      <p className="message">{message}</p>
      </div>
    </div>
  );
}

export default Login;
