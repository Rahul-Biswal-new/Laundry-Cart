import React, { useState, useEffect } from "react";
import Wash from "../assets/wash.png";
import Wash1 from "../assets/wash1.png";
import Iron from "../assets/iron.png";
import Iron1 from "../assets/iron1.png";
import Liquid1 from "../assets/liquid1.png";
import Fold from "../assets/fold.png";
import Liquid from "../assets/liquid.png";
import Fold1 from "../assets/fold1.png";

function Ordercomponent(props) {
  const [wash, setWash] = useState(false);
  const [iron, setIron] = useState(false);
  const [pack, setPack] = useState(false);
  const [fold, setFold] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState("---");
  const washCost = 20;
  const pressCost = 15;
  const foldCost = 10;
  const packCost = 25;

  function costCalculation() {
    console.log(quantity, wash, iron, pack);
    let cost = 0;
    if (wash) {
      cost += quantity * washCost;
    }
    if (iron) {
      cost += quantity * pressCost;
    }

    if (pack) {
      cost += quantity * packCost;
    }
    if (fold) {
      cost += quantity * foldCost;
    }
    setPrice(cost);
  }

  function washChange() {
    setWash(!wash);
  }
  function pressChange() {
    setIron(!iron);
  }

  function packChange() {
    setPack(!pack);
  }
  function foldChange() {
    setFold(!fold);
  }
  useEffect(() => {
    costCalculation();
    props.handleClick({
      name: props.name,
      value: {
        quantity: quantity,
        wash: wash,
        press: iron,
        fold: fold,
        pack: pack,
        price: price,
      },
    });
  });

  return (
    <tr>
      <td>
        <div class="row">
          <div class="col-lg-2">
            <img
              name="item"
              type="text"
              src={`${process.env.PUBLIC_URL}/assets/${props.image}`}
              alt="shirt"
              class="orderimg"
            />
          </div>
          <div class="col-lg-10">
            <p>{props.description}</p>
          </div>
        </div>
      </td>
      <td>
        <input
          type="text"
          name="quantity"
          class="form-control"
          onChange={(e) => {
            setQuantity(e.target.value);
          }}
          value={quantity}
        />
      </td>
      <td>
        <div class="row">
          <div class="col-lg-3">
            <img
              type="Boolean"
              name="wash"
              src={wash ? Wash1 : Wash}
              onClick={() => {
                washChange();
              }}
              alt="wash"
            />
          </div>
          <div class="col-lg-3">
            <img
              type="Boolean"
              name="press"
              src={iron ? Iron1 : Iron}
              onClick={() => {
                pressChange();
              }}
              alt="press"
            />
          </div>
          <div class="col-lg-3">
            <img
              type="Boolean"
              name="fold"
              src={fold ? Fold1 : Fold}
              onClick={() => {
                foldChange();
              }}
              alt="fold"
            />
          </div>
          <div class="col-lg-3">
            <img
              type="Boolean"
              name="pack"
              src={pack ? Liquid1 : Liquid}
              onClick={() => {
                packChange();
              }}
              alt="pack"
            />
          </div>
        </div>
      </td>
      <td>{price}</td>
      <td>
        <button class="btn resetbtn" type="reset">
          Reset
        </button>
      </td>
    </tr>
  );
}

export default Ordercomponent;
