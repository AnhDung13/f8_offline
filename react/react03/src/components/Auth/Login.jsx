import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await fetch("https://api.escuelajs.co/api/v1/auth/login", {
      method: "POST",
      headers: "Application/json",
      body: {
        email,
        password,
      },
    });
    const data = await res.json();
    console.log(data);
  };
  return (
    <div>
      <h1>Đăng nhập</h1>
      <form action="" onSubmit={handleLogin}>
        <div>
          <input
            type="email"
            placeholder="Email..."
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password..."
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button>Login</button>
      </form>
    </div>
  );
}
