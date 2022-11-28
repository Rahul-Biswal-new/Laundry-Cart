import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import Orderheader from "./orderheader";
import Footer from "./footer";
import OrderedItems from "./orderedItems";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { clearToken, getToken } from "../Utils/AuthOperations";

function Listview() {
  const history = useHistory();
  const [count, setCount] = useState(0);
  function createlist() {
    console.log("Hello");
    history.push("/createorder");
  }
  const [show, setShow] = useState(false);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/orders", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getToken()}`,
        },
      })
      .then((response) => {
        setOrders(response.data.data.orders);
        setCount(orders.length);
        // setTimeout(() => {
        //   setOrders(response.data.data.orders);
        //   setCount(orders.length);
        // }, 1000);
        console.log(orders);
      })
      .catch((e) => {
        alert("unAuthorized user");
      });
  }, );
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
                  class="fa fa-plus-circle fontmain"
                  onClick={() => history.push("/createorder")}
                ></i>
              </div>
              <div class="col-lg-12">
                <i
                  class="fa fa-bars fontmain1"
                  onClick={() => history.push("/listview")}
                ></i>
              </div>
              <div class="col-lg-12">
                <i
                  class="fa fa-sign-out fontmain"
                  onClick={() => {
                    history.push("/");
                    clearToken();
                  }}
                ></i>
              </div>
            </div>
          </div>
          <div class="col-lg-11">
            <div class="row">
              <div class="col-lg-2">
                <p>Orders | {count}</p>
              </div>
              <div class="col-lg-6"></div>
              <div class="col-lg-2">
                <button class="btn btn-primary " onClick={createlist}>
                  Create
                </button>
              </div>
              <div class="col-lg-2">
                <div class="form-group has-search">
                  <span class="fa fa-search form-control-feedback"></span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Search"
                  />
                </div>
              </div>
            </div>
            <table class="table maintable">
              <thead>
                <tr class="table-dark ">
                  <th>Order id</th>
                  <th>Order Date & Time </th>
                  <th>Store Location</th>
                  <th>City</th>
                  <th>Store Phone</th>
                  <th>Total Items</th>
                  <th>Price</th>
                  <th>Status</th>
                  <th>Cancel Order</th>
                  <th>View</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((orders) => (
                  <OrderedItems key={orders.order_id} {...orders} />
                ))}
              </tbody>
            </table>

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
                <div class="row mainadd">
                  <div class="col-lg-4">Store Location</div>
                  <div class="col-lg-4">Store Address</div>
                  <div class="col-lg-4">Phone</div>
                </div>
                <p>
                  Ipsum molestiae natus adipisci modi eligendi? Debitis amet
                  quae unde commodi aspernatur enim, consectetur. Cumque
                  deleniti temporibus ipsam atque a dolores quisquam quisquam
                  adipisci possimus laboriosam. Quibusdam facilis doloribus
                  debitis! Sit quasi quod accusamus eos quod. Ab quos
                  consequuntur eaque quo rem! Mollitia reiciendis porro quo
                  magni incidunt dolore amet atque facilis ipsum deleniti rem!
                </p>
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

export default Listview;
