import React from "react";
import Footer from "./footer";
import Referal from "./referal";
import Footermain from "./footermain";
import Header from "./header";

function Homepage() {
  return (
    <div>
      <Header />

      <div class="container">
        <div class="row ">
          <p class="mainh1 text-center py-5">Laundry Service</p>
          <p class="doorstep text-center py-4">
            Doorstep Wash & Dryclean Service
          </p>
        </div>
      </div>
      <Referal />
      <Footermain />
      <Footer />
    </div>
  );
}

export default Homepage;
