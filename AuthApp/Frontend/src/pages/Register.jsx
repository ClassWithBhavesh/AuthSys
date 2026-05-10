import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from '../api/axios.js';

function Register() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));    
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            axios.post("/register", formData);

            navigate("/login");
        } catch (error) {
            console.log(error);
        }
    }



  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='enter your name' name="name" onChange={handleChange} />
            <input type="email" placeholder='enter your email' name="email" onChange={handleChange} />
            <input type="password" placeholder='enter your password' name="password" onChange={handleChange} />
            <button type="submit">Register</button>
        </form>
    </div>
  )
}

export default Register