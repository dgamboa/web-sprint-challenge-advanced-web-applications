import React, { useState, useEffect } from "react";
import axios from "axios";

const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [credentials, setCredentials] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // ****************************************************
  // ***This code came along with the assignment*********
  // ***I don't think it's supposed to be here***********
  // ****************************************************
  // useEffect(()=>{
  //   axios
  //     .delete(`http://localhost:5000/api/colors/1`, {
  //       headers:{
  //         'authorization': "ahuBHejkJJiMDhmODZhZi0zaeLTQ4ZfeaseOGZgesai1jZWYgrTA07i73Gebhu98"
  //       }
  //     })
  //     .then(res=>{
  //       axios.get(`http://localhost:5000/api/colors`, {
  //         headers:{
  //           'authorization': ""
  //         }
  //       })
  //       .then(res=> {
  //         console.log(res);
  //       });
  //       console.log(res);
  //     })
  // }, []);

  useEffect(() => {
    if (props.location.state) {
      setError(props.location.state.error);
    };
  }, [props.location.state]);

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
    setError("");
  };

  const handleLogin = e => {
    e.preventDefault();
    setIsLoading(true);
    axios.post(`http://localhost:5000/api/login`, credentials)
      .then(res => {
        const token = JSON.stringify(res.data.payload);
        localStorage.setItem("token", token);
        props.history.push("/bubbles");
      })
      .catch(err => {
        console.log({err});
        setError(err.response.data.error)
      })
      .finally(setIsLoading(false))
  };

  return (
    <div>
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
        {
          isLoading
            ? <p>Loading...</p>
            : <button>Login</button>
        }
        <p style={{color:"red"}}>{error}</p>
      </form>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state is necessary for form functioning.
//3. MAKE SURE THAT FORM INPUTS INCLUDE THE LABEL TEXT "username" and "password" RESPECTIVELY.
//4. If either the username or password is not displayed EXACTLY the following words: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.