const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema(
  {
    order_id: { type: String, required: true },
    user_id: { type: mongoose.Types.ObjectId, reference: "User" },
    details: [
      {
        item: { type: String },
        quantity: { type: Number },
        wash: { type: Boolean, default: false },
        press: { type: Boolean, default: false },
        fold: { type: Boolean, default: false },
        pack: { type: Boolean, default: false },
        price: { type: Number, required: true },
      },
    ],
    total_quantity: { type: Number },
    total_price: { type: Number },
    status: {
      type: String,
      enum: ["Ready to Pick Up", "Washed", "Ironed", "Delivered", "Cancelled"],
      default: "Ready to Pick Up",
      required: true,
    },
    address: { type: String },
  },
  { timestamps: true }
);

const order = mongoose.model("order", OrderSchema);

module.exports = order;
