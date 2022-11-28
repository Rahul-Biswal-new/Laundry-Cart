import React from "react";
import "./home.css";
import { useHistory } from "react-router-dom";
import "./Header.css"
function Header() {
  const history = useHistory();
  function LaundryHome(e) {
    history.push("/");
  }
  return (
    <div>
      <div className='header-container'>
    <div className='header-logo' onClick={LaundryHome}>LAUNDRY</div>
    <div className='header-navs'>
      <ul>
        <li>Home</li>
        <li>Pricing</li>
        <li>Career</li>
        <li className='header-signin'>Sign In</li>
      </ul>
    </div>
  </div>;
    </div>
  );
}
export default Header;