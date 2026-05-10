import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import axios from "../api/axios.js";
import useAuth from "../hooks/useAuth.js";

function Login() {
  const { setAuth } = useAuth();

  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/login", loginData);

      const accessToken = response?.data?.accessToken;
      const user = response?.data?.user;

      setAuth({
        user,
        accessToken,
      });

      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          onChange={handleChange}
          placeholder="Enter Your Email"
          name="email"
          id="email"
        />
        <input
          type="password"
          onChange={handleChange}
          placeholder="Enter Your Password"
          name="password"
          id="password"
        />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default Login;
