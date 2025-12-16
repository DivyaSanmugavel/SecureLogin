import { useState } from "react";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setMessage("All fields are required");
      return;
    }

    setMessage("Registration successful! You can login now.");
  };

  return (
    <div>
      <h2>Register</h2>

      <form onSubmit={handleRegister}>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        /><br/><br/>

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        /><br/><br/>

        <button type="submit">Register</button>
      </form>

      {message && <p>{message}</p>}

      <p>
        Already registered? <a href="/login">Login</a>
      </p>
    </div>
  );
}

export default Register;
