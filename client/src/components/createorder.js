import React from "react";
import Footer from "./footer";
import Orderheader from "./orderheader";
import "./mainhome.css";
import "font-awesome/css/font-awesome.min.css";
import { useHistory } from "react-router-dom";

function Createorder() {
  const history = useHistory();
  function createlist() {
    console.log("Hello");
    history.push("/orderlist");
  }
  return (
    <div>
      <Orderheader />
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-1 main-head">
            <div class="row">
              <div class="col-lg-12">
                <i
                  class="fa fa-home fontmain"
                  onClick={() => history.push("/homepage")}
                ></i>
              </div>
              <div class="col-lg-12">
                <i
                  class="fa fa-plus-circle fontmain1"
                  onClick={() => history.push("/createorder")}
                ></i>
              </div>
              <div class="col-lg-12">
                <i
                  class="fa fa-bars fontmain"
                  onClick={() => history.push("/listview")}
                ></i>
              </div>
              <div class="col-lg-12">
                <i
                  class="fa fa-sign-out fontmain"
                  onClick={() => history.push("/")}
                ></i>
              </div>
            </div>
          </div>
          <div class="col-lg-11">
            <div class="row">
              <div class="col-lg-2">
                <p>Orders</p>
              </div>
              <div class="col-lg-8"></div>
              <div class="col-lg-2">
                <div class="form-group has-search">
                  <span class="fa fa-search form-control-feedback"></span>
                  <input
                    type="text"
                    class="form-control"
                    id="searchbar"
                    placeholder="Search"
                  />
                </div>
              </div>
            </div>
            <div class="createbtn">
              <p class="order-ava">No Orders available</p>
              <button class="create-button" onClick={createlist}>
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Createorder;
