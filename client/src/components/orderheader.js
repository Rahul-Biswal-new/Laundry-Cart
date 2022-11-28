import React, { useEffect, useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./mainhome.css";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { getToken } from "../Utils/AuthOperations";
import './OrderHeader.css'

function Orderheader() {
  const [user, setUser] = useState("");
  const history = useHistory();
  function laundryhome() {
    history.push("/");
  }

  useEffect(() => {
    console.log("orderheader", getToken());
    axios
      .get("http://localhost:5000/get", {
        headers: { Authorization: "Bearer " + getToken() },
      })
      .then((response) => {
        setUser(response.data.data.get_user.name);
      })
      .catch((e) => {
        alert("unAuthorized user");
      });
  });
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="dark">
        <Navbar.Brand href="#home" class="laundryhead" onClick={laundryhome}>
          Laundry
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className="me-auto"></Nav>
          <Nav id="login-header">
            <Nav.Link href="#features">Pricing</Nav.Link>
            <Nav.Link href="#features">Career</Nav.Link>
            <Nav.Link href="#features">
              <p class="signinlink" id="signinlink">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSDXwxl3CI0u9Bwy-tkjM9cIbiLiIa1QxPJQ&usqp=CAU" class="img" alt="image1" />
                {user}
              </p>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Orderheader;
