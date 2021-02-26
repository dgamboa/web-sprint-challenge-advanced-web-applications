import React, { useState, useEffect } from "react";
import axios from "axios";

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [credentials, setCredentials] = useState({});
  const [error, setError] = useState("Hello there");

  useEffect(()=>{
    axios
      .delete(`http://localhost:5000/api/colors/1`, {
        headers:{
          'authorization': "ahuBHejkJJiMDhmODZhZi0zaeLTQ4ZfeaseOGZgesai1jZWYgrTA07i73Gebhu98"
        }
      })
      .then(res=>{
        axios.get(`http://localhost:5000/api/colors`, {
          headers:{
            'authorization': ""
          }
        })
        .then(res=> {
          console.log(res);
        });
        console.log(res);
      })
  }, []);

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
    setError("");
  };

  const handleLogin = e => {
    e.preventDefault();
    console.log("tried to login");
  };

  return (
    <>
      <h1>
        Welcome to the Bubble App!
      </h1>
      <form onSubmit={handleLogin}>
        <label>Username
          <input
            type="text"
            name="username"
            value={credentials.username || ""}
            onChange={handleChange}
          />
        </label>
        <label>Password
          <input
            type="password"
            name="password"
            value={credentials.password || ""}
            onChange={handleChange}
          />
        </label>
        <button>Login</button>
        <p style={{color:"red"}}>--{error}--</p>
      </form>
    </>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state is necessary for form functioning.
//3. MAKE SURE THAT FORM INPUTS INCLUDE THE LABEL TEXT "username" and "password" RESPECTIVELY.
//4. If either the username or password is not displayed EXACTLY the following words: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.