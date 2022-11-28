import React from "react";
import Footer from "./footer";
// import Referal from "./referal";
import Footermain from "./footermain";
import Header from "./header";
import Registercard from "./registercard";

function Register() {
  return (
    <div>
      <Header />
      <Registercard />
      {/* <Referal /> */}
      <Footermain />
      <Footer />
    </div>
  );
}

export default Register;
