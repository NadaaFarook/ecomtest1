import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
const Signup = () => {
  const navigate = useNavigate();
    {
        "firstName": "Adarsh",
        "lastName": "Balika",
        "email": "adarshbalika@neog.camp",
        "password": "adarshBalika"
      }
  //"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmI2MTJhOC02Y2UwLTRhOTMtOGQwZC0zNzJlZDBlMTQxN2EiLCJlbWFpbCI6ImFkYXJzaGJhbGlrYUBnbWFpbC5jb20iLCJpYXQiOjE2NDY5MDAwOTF9.6MN57m0zseZY67JXQvgZD-Y4KPwakkHgyMc4WTUsZj4"
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `/api/auth/signup`,
        JSON.stringify({
          firstName: "Adarsh",
          lastName: "Balika",
          email: "adarshbalika@neog.camp",
          password: "adarshBalika",
        })
      );
      // saving the encodedToken in the localStorage
      localStorage.setItem("token", response.data.encodedToken);
      navigate("/");
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  return (
    <>
      <h1>Signup</h1>
      <form onSubmit={(e) => onSubmit(e)}>
        <input placeholder="First Name" />

        <input placeholder="Last name" />
        <input placeholder="Email" />
        <input placeholder="Password" />
        <button>Submit</button>
      </form>
    </>
  );
};

export default Signup;
