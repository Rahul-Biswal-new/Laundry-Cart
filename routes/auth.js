const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const requireLogin = require("../middleware/requireLogin");

const JWT_Secret = "heythisismukeshkumarfrom10xacademylearningfullstackdevelopement";

router.get("/protected", requireLogin, (req, res) => {
  res.send("Hello! Dear User.");
  console.log("Hello user!! you passed without any error.");
});

router.post("/register", (req, res) => {
  const { name, email, phone, state, district, address, pincode, password } =
    req.body;
  if (
    !name ||
    !email ||
    !phone ||
    !state ||
    !district ||
    !address ||
    !pincode ||
    !password
  ) {
    return res.status(422).json({ error: "all fields are mendatory" });
  }

  User.findOne({ email: email })
    .then((savedUser) => {
      if (savedUser) {
        res.status(422).json({ error: "User already exists for this email." });
      }
      bcrypt.hash(password, 12).then((hashedPassword) => {
        const user = new User({
          name,
          email,
          phone,
          state,
          district,
          address,
          pincode,
          password: hashedPassword,
        });
        user
          .save()
          .then((user) => {
            res.json({ message: "Saved Successfully" });
          })
          .catch((e) => {
            console.log("Error", e);
          });
      });
    })
    .catch((e) => {
      console.log(e);
    });
});

router.post("/signin", (req, res) => {
  const { email, phone, password } = req.body;
  console.log(email, phone);
  if (!(email || phone) || !password) {
    return res.status(422).json({ error: "Email and Password both Required" });
  }

  User.findOne({ $or: [{ email: email }, { phone: email }] }).then(
    (savedUser) => {
      if (!savedUser) {
        return res.status(422).json({ error: "Invalid Email or Password" });
      }
      bcrypt
        .compare(password, savedUser.password)
        .then((doMatch) => {
          if (doMatch) {
            // res.json({message:"Logged in Successfully."})
            const token = jwt.sign({ _id: savedUser._id }, JWT_Secret);
            res.json({ token: token, message: "Logged in Successfully" });
          } else {
            return res
              .status(422)
              .json({ error: "Invalid Email or Password:: Try Again" });
          }
        })
        .catch((e) => {
          console.log("Error", e);
        });
    }
  );
});

module.exports = router;
