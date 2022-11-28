import React, { useState } from "react";
import "./mainhome.css";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { getToken, setToken } from "../Utils/AuthOperations";
import './HomeMiddle.css'

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const [colour, setColour] = useState(false);

  const history = useHistory();
  function registersub() {
    history.push("/register");
  }
  function signinsub(e) {
    e.preventDefault();
    console.log("Hello");
    console.log(email, password);
    axios
      .post("http://localhost:5000/signin", {
        email: email,
        password: password,
      })
      .then((response) => {
        {
          const { data } = response;
          setToken(data.token);
          console.log("Token: ", data.token);
          setUser(response.data);
          setToken(response.data.token);
          console.log("token", getToken());
          history.push("/createorder");
        }
        console.log("colour", colour);
      })
      .catch((e) => {
        console.log(e);
        setColour(true);
        console.log("colour", colour);
      });
    if (user) {
      return;
    }
    console.log(user);
  }

  return (
    
    <div className="home-middle">
      <div className='middle-left'>
        <div className='big-logo'>
            <h1>Laundry</h1>
            <h1>Service</h1>
        </div>
        <p>Doorstep Wash & Dryclean Service</p>
        <div className='register-div'>
            <h4>Don't have an account?</h4>
            <button onClick={registersub}>Register</button>
        </div>
      </div>

      <div className='sign-in'>
        <h2>SIGN IN</h2>
        <div className='input-field'>
        <form method='POST' id="signin-form">
        <input
                type="text"
                id="phone"
                placeholder="Mobile/Email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
        />
        <input
                type="password"
                id="pwd"
                placeholder="Password"
                name="password"
                style={colour ? { color: "red" } : { color: "black" }}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
        />
      
        <a href="https://" id='forgot' className="forgot">Forgot Password?</a>
        <button onClick={signinsub}>Sign In</button>
        </form>
        </div>
      </div>
    </div>
  );
}

export default Signin;