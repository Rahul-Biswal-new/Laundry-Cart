import axios from "axios";
import React, { useState } from "react";
import moment from "moment";
import "./summary.css";
import Summaryfinal from "./summaryfinal";
import { Modal } from "react-bootstrap";
import { getToken } from "../Utils/AuthOperations";

function OrderedItems({
  _id,
  order_id,
  phone,
  address,
  total_quantity,
  status,
  total_price,
  createdAt,
}) {
  const [show, setShow] = useState(false);
  const [cancle, setCancel] = useState(false);
  const [orderDetails, setOrderDetails] = useState([]);

  async function Cancel() {
    setCancel(true);
  }

  async function handleClickStatus() {
    axios
      .put(
        `http://localhost:5000/orders/${_id}`,
        {},
        { headers: { Authorization: `Bearer ${getToken()}` } }
      )
      .catch((e) => {
        alert("unAuthorized user");
      });
  }

  async function handleClick() {
    setShow(true);
    //setCancel(true);
    axios
      .get(`http://localhost:5000/orders/${_id}`, {
        headers: { Authorization: `Bearer ${getToken()}` },
      })
      .then((res) => {
        setOrderDetails(res.data.data.details);
      });
  }

  return (
    <>
      <tr>
        <td>{order_id}</td>
        <td>{moment(createdAt).format("DD MMM YYYY,HH:mm")}</td>
        <td>Jp Nagar</td>
        <td>{address}</td>
        <td>+91 9988667788</td>
        <td>{total_quantity}</td>
        <td>{total_price}</td>
        <td>{status}</td>
        <td>
          <p class="text-danger font-weight-bold" onClick={Cancel}>
            {status === "Ready to Pick Up" ? "Cancel Order" : "--"}
          </p>
        </td>
        <td>
          <i class="fa fa-eye" onClick={handleClick}></i>
        </td>
      </tr>
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
                <h6>Store Location</h6>
                <p>Jp Nagar</p>
              </div>
              <div class="col-lg-4">
                <h6>Store Address</h6>
                <p>Near Phone Booth, 10th Road</p>
              </div>
              <div class="col-lg-4">
                <h6>Phone</h6>
                <p>+91 9988667788</p>
              </div>
            </div>
          </div>

          {/* table */}
          <div>
            <small>
              <p>Order Details</p>
            </small>
          </div>
          {orderDetails.length > 0 &&
            orderDetails.map(
              (orderedItem) =>
                orderedItem.quantity > 0 &&
                (orderedItem.wash ||
                  orderedItem.fold ||
                  orderedItem.press ||
                  orderedItem.pack) && (
                  <Summaryfinal
                    name={orderedItem.item}
                    type={orderedItem}
                    cost={orderedItem.price}
                  />
                )
            )}

          <div class="rate-head">
            sub Total :{" "}
            {orderDetails
              .map((order) => order.price)
              .reduce((acc, curr) => acc + parseInt(curr, 10), 0)}
          </div>

          <div class="rate-head">Pick Up Charges : 90</div>

          <div class="row totalcss my-3">
            <div class="col-lg-4"></div>
            <div class="col-lg-4"></div>
            <div class="col-lg-4 ">
              Total : Rs{" "}
              {orderDetails
                .map((order) => order.price)
                .reduce((acc, curr) => acc + parseInt(curr, 10), 90)}
            </div>
          </div>
          <br />

          <div>
            <h6 className="add">Address</h6>
          </div>
          <div class="container">
            <div class="row">
              <div className="col-lg-4 address-box card bg-Basic py-3 px-2">
                <div class="card-body text-center">
                  <h6 class="card-title">Home</h6>
                  <p class="card-text">
                    #4-132, A-Colony, Jamshedpur, Near SBI
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}

          <br />
          <br />
          <div className="confirm" id="button">
            <button
              type="button"
              class="btn btn-danger"
              onClick={handleClickStatus}
            >
              Cancel order
            </button>
          </div>
        </Modal.Body>
      </Modal>
      <Modal
        show={cancle}
        onHide={() => setCancel(false)}
        dialogClassName="modal-30w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Alert
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <div class="row">
              <div class="col-lg-4">
                {" "}
                <i className="fa fa-exclamation-triangle fatri"></i>
              </div>
              <div class="col-lg-8">
                {" "}
                <p>
                  Are you sure want to cancel the order Order No:{" "}
                  <spam class="ordername">{order_id}</spam>{" "}
                </p>
              </div>
            </div>
            <div className="cancel_button">
              <button
                type="button"
                className="itemsproceed"
                onClick={handleClickStatus}
              >
                Proceed
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default OrderedItems;
