import React, { useState } from "react";
import Footer from "./footer";
import Orderheader from "./orderheader";
import "./orderlist.css";
import "./mainhome.css";
import "font-awesome/css/font-awesome.min.css";
import { Modal } from "react-bootstrap";
import Ordercomponent from "./ordercomponent";
import Summaryorder from "./summaryorder";
import { useHistory } from "react-router-dom";

const order = { orderId: "orderId", userId: "userId", details: new Map() };
let orderedDate = [];

function Orderlist() {
  const [show, setShow] = useState(false);

  const history = useHistory();

  function handleCallback(props) {
    order.details.set(props.name, props.value);
    orderedDate = [...order.details].map(([name, value]) => ({
      name,
      value,
    }));
    console.log("orderedData", orderedDate);
    return;
  }

  const orderComponents = [
    {
      image: "shirt.jpg",
      description:
        "Best shirt Wash & service ",
      name: "Shirts",
      type: "Boolean",
    },
    {
      image: "tshirt.jpg",
      description:
        "Best t-shirt Wash & Service",
      name: "Tshirts",
      type: "Boolean",
    },
    {
      image: "jeans.jpg",
      description:
        "Visit again for best jeans wash..",
      name: "Jeans",
    },
    {
      image: "trousers.jpg",
      description:
        "best trousers washing laundry",
      name: "Trousers",
      type: "Boolean",
    },
  ];
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
                  onClick={() => history.push("/")}
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
                <p>Create Order</p>
              </div>
              <div class="col-lg-8"></div>
              <div class="col-lg-2">
                <div class="form-group has-search">
                  <span class="fa fa-search form-control-feedback"></span>
                  <input
                    type="text"
                    class="form-control"
                    id="searchbar"
                    placeholder="search"
                  />
                </div>
              </div>
            </div>

            <table class="table maintable">
              <thead>
                <tr class="table-dark ">
                  <th>Product Types</th>
                  <th>Quantity </th>
                  <th>Wash Type</th>
                  <th>Price</th>
                  <th>Reset</th>
                </tr>
              </thead>
              <tbody>
                {orderComponents.map((orderItem) => (
                  <Ordercomponent
                    image={orderItem.image}
                    description={orderItem.description}
                    name={orderItem.name}
                    handleClick={handleCallback}
                  />
                ))}
              </tbody>
            </table>
            <div class="but-com">
              <button class="btn btn btn-outline-primary cancel">Cancel</button>
              <button
                class="btn btn btn-primary proceed"
                onClick={() => setShow(true)}
              >
                proceed
              </button>
            </div>

            <Modal
              show={show}
              onHide={() => setShow(false)}
              dialogClassName="modal-90w"
              aria-labelledby="example-custom-modal-styling-title"
            >
              <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                  Summary
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="confirm_page">
                  <div class="row mainadd">
                    <div class="col-lg-4">
                      <select data-bs-display="static" aria-expanded="false">
                        <option disabled selected value>
                          {" "}
                          Store Location{" "}
                        </option>
                        <option>Banglore</option>
                        <option>Hyderabad</option>
                        <option>Jharkhand</option>
                        <option>Uttar Pradesh</option>
                        <option>Mumbai</option>
                        <option>Haryana</option>
                        <option>Bihar</option>
                      </select>
                    </div>
                    <div class="col-lg-4">
                      <h6>Store Location</h6>
                      <p>Kormangala, Bangalore</p>
                    </div>
                    <div class="col-lg-4">
                      <h6>Phone</h6>
                      <p>+91 9876543210</p>
                    </div>
                  </div>
                </div>

                <Summaryorder
                  total={orderedDate
                    .map((order) => order.value.price)
                    .reduce((acc, curr) => acc + parseInt(curr, 10), 0)}
                  orderedDate={orderedDate}
                />
              </Modal.Body>
            </Modal>

            <div class="createbtn"></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Orderlist;
