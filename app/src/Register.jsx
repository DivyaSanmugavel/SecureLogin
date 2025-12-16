import { useState } from "react";
import axios from "axios";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8080/api/auth/register", {
        email,
        password
      });

      setMessage("Registration successful!");
      setEmail("");
      setPassword("");
    } catch (error) {
      setMessage("Registration failed");
    }
  };

  return (
    <div className="container">
        <div className="card">

       
      <h2>Register</h2>

      <form onSubmit={handleRegister}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        required/><br/><br/>

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        required/><br/><br/>

        <button type="submit">Register</button>
      </form>

      <p className="message">{message}</p>
       </div>
    </div>
  );
}

export default Register;
