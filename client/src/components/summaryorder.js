import axios from "axios";
import React from "react";
import { useHistory } from "react-router-dom";
import { getToken } from "../Utils/AuthOperations";
import Summaryfinal from "./summaryfinal";

function Summaryorder(props) {
  const history = useHistory();

  async function orderSuccessAlrt() {
    alert("Your Order got Placed Successfully");
  }

  function confirmlist() {
    const data = [];

    props.orderedDate.forEach((order) => {
      data.push({ item: order.name, ...order.value });
    });

    axios.post(
      "http://localhost:5000/Orders",
      {
        details: data,
        address: "Israel",
        status: "Ready to Pick Up",
      },
      { headers: { Authorization: `Bearer ${getToken()}` } }
    );
    console.log("Hello");
    orderSuccessAlrt();
    history.push("/listview");
  }

  return (
    <div>
      <p class="order-head">Order Details</p>
      {props.orderedDate.length > 0 &&
        props.orderedDate.map(
          (orderedItem) =>
            orderedItem.value.quantity > 0 &&
            (orderedItem.value.wash ||
              orderedItem.value.fold ||
              orderedItem.value.press ||
              orderedItem.value.pack) && (
              <Summaryfinal
                name={orderedItem.name}
                type={orderedItem.value}
                cost={orderedItem.value.price}
              />
            )
        )}

      <div class="rate-head">sub Total: {props.total}</div>

      <div class="rate-head">Pick Up Charges : 90</div>

      <div class="row totalcss">
        <div class="col-lg-4"></div>
        <div class="col-lg-4"></div>
        <div class="col-lg-4 ">Total : Rs {props.total + 90}</div>
      </div>
      <div class="card-columns col p-1 m-1 row-cols-lg-2">
        <div class="card bg-Basic">
          <div class="card-body text-center">
            <h6 class="card-title">Home</h6>
            <p class="card-text">7th cross Road Maruthi Nagar BTM Phase 1 Bangalore</p>
          </div>
        </div>
        
      </div>

      <div class="btncon">
        <button class="btn btn-primary my-3 " onClick={confirmlist}>
          Confirm
        </button>
      </div>
    </div>
  );
}

export default Summaryorder;
