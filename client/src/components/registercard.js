import React, { useState } from "react";
import axios from "axios";
import "./registercard.css";
import "./RegisterLeft.css";
import "./RegisterRight.css";
import { useHistory } from "react-router-dom";

function Registercard() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  function signinsub() {
    history.push("/");
  }
  function createRegister() {
    axios
      .post("http://localhost:5000/register", {
        name: name,
        email: email,
        phone: phone,
        state: state,
        district: district,
        address: address,
        pincode: pincode,
        password: password,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
    history.push("/");
  }

  return (
    <div>
      <div className="upper-container">
        <div className="Heading-container">
          <h2>Laundry </h2>
          <h2>Service</h2>
          <p>Doorstep Wash & </p>
          <p>Dryclean Service</p>
        </div>
        <div className="bottom-container">
          <p>Already Have Account</p>
          <button onClick={signinsub}>Sign In</button>
        </div>
      </div>

      <div className="register-container">
        <h1>REGISTER</h1>
        <form action="">
          <div className="register-box">
            <div className="left-register">

              <input
                type="text"
                class="inputform "
                placeholder="Name"
                name="name"
                onChange={(e) => setName(e.target.value)}
              />

              <input
                type="text"
                class="inputform"
                placeholder="Phone"
                name="phone"
                onChange={(e) => setPhone(e.target.value)}
              />

              <input
                type="text"
                class="inputform"
                placeholder="District"
                name="district"
                onChange={(e) => setDistrict(e.target.value)}
              />

              <input
                type="text"
                class="inputform"
                placeholder="Pincode"
                name="pincode"
                onChange={(e) => setPincode(e.target.value)}
              />
            </div>

            <div className="right-register">
              <input
                type="email"
                class="inputform "
                placeholder="Email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                type="text"
                class="inputform "
                id="pwd"
                placeholder="State"
                name="state"
                onChange={(e) => setState(e.target.value)}
              />

              <input
                type="text"
                class="inputform "
                placeholder="Address"
                name="pwd"
                onChange={(e) => setAddress(e.target.value)}
              />

              <input
                type="password"
                class="inputform "
                placeholder="Password"
                name="pwd"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="term-condition">
            <input
              type="checkbox"
              class="form-check-input registercheck"
              id="check1"
              name="option1"
              value="something"
            />
            <h4>
              I agree to Terms & Condition receiving marketing and promotional
              materials
            </h4>
          </div>
          <button onClick={createRegister}>Register</button>
        </form>
      </div>
    </div>
  );
}

export default Registercard;
