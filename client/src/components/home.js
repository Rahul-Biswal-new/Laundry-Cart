import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./footer";
import Referal from "./referal";
import Footermain from "./footermain";
import Header from "./header";
import Signin from "./signin";

function home() {
  return (
    <div>
      <Header />
      <Signin />
      <Referal />
      <Footermain />
      <Footer />
    </div>
  );
}

export default home;
