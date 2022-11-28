const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;
const OrderRoutes = require("./routes/order");
const GetDetailsRoutes = require("./routes/get_userdetails");
// const jwt = require("jsonwebtoken");
const jwt = require("jsonwebtoken");

const app = express();
const db =
  "mongodb+srv://mukesh:mukesh1234@cluster0.qp6ub.mongodb.net/mylaundry?retryWrites=true&w=majority";

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB Connection Successful");
  })
  .catch((err) => {
    console.log("MongoDB Connection Error", err);
  });

app.use(cors());
require("./models/user");
require("./models/order");

app.use(express.json());
app.use(require("./routes/auth"));
app.use("/orders", OrderRoutes);
app.use("/get", GetDetailsRoutes);

app.use(cors());

require("./models/user");

app.use(express.json());
app.use(require("./routes/auth"));

app.listen(port, () => {
  console.log(`Server is running on Port :: ${port}`);
});
