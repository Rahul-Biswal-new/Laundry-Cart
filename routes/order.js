const express = require("express");
const Order = require("../models/order");
const mongoose = require("mongoose");
const requireLogin = require("../middleware/requireLogin");
const router = express.Router();

router.get("/", requireLogin, async function (req, res) {
  try {
    const orders = await Order.find({ user_id: req.user });
    return res.json({
      status: "success",
      data: {
        orders,
      },
    });
  } catch (e) {
    res.json({
      status: "failed",
      message: e.message,
    });
  }
});

router.post("/", requireLogin, async function (req, res) {
  const number = await Order.countDocuments();
  console.log("variable ", number);
  let order_num = "ORDER-NO-" + (number + 1);

  const { Wash, Press, Fold, Pack } = {
    Wash: 20,
    Press: 15,
    Fold: 10,
    Pack: 25,
  };
  const Details = req.body.details;
  let Price = 0;
  let Quantity = 0;

  Details.forEach((detail) => {
    let total = 0;
    if (detail.wash) {
      total += detail.quantity * Wash;
    }
    if (detail.press) {
      total += detail.quantity * Press;
    }
    if (detail.fold) {
      total += detail.quantity * Fold;
    }
    if (detail.pack) {
      total += detail.quantity * Pack;
    }
    detail["price"] = total;
    Price += total;
    Quantity += parseInt(detail.quantity);
  });

  const { address, status } = req.body;
  const order = await Order.create({
    order_id: order_num,
    details: Details,
    total_quantity: Quantity,
    user_id: mongoose.Types.ObjectId(req.user[0]._id),
    total_quantity: Quantity,
    total_price: Price,
    address,
    status,
  });
  console.log("order.user-->", order.user, "req.user-->", req.user);

  res.json({
    status: "success",
    data: {
      order,
    },
  });
});

router.delete("/:id", requireLogin, async function (req, res) {
  const post = await Order.findOne({ _id: req.params.id });
  if (!post) {
    return res.status(404).json({
      status: "failed",
      message: "Post Not Found",
    });
  }

  await Order.deleteOne({ _id: req.params.id });

  res.json({
    status: "success",
  });
});

router.get("/:id", requireLogin, async function (req, res) {
  try {
    const order = await Order.findOne({
      _id: mongoose.Types.ObjectId(req.params.id),
      user_id: req.user,
    });
    return res.json({
      status: "success",
      data: order,
    });
  } catch (e) {
    res.json({
      status: "failed",
      message: e.message,
    });
  }
});

router.put("/:id", requireLogin, async function (req, res) {
  try {
    const order = await Order.findOneAndUpdate(
      {
        _id: mongoose.Types.ObjectId(req.params.id),
        user_id: req.user,
      },
      { $set: { status: "Cancelled" } },
      { new: true }
    );
    return res.json({
      status: "success",
      data: order,
    });
  } catch (e) {
    res.json({
      status: "failed",
      message: e.message,
    });
  }
});

module.exports = router;
