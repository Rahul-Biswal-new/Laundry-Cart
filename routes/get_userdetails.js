const express = require("express");
const mongoose = require("mongoose");
const requireLogin = require("../middleware/requireLogin");
const router = express.Router();

require("../models/user");
const User = mongoose.model("User");

router.get("/", requireLogin, async function (req, res) {
  try {
    const get_user = await User.findOne({
      _id: mongoose.Types.ObjectId(req.user[0]._id),
    });
    return res.json({
      status: "success",
      data: {
        get_user,
      },
    });
  } catch (e) {
    res.json({
      status: "failed",
      message: e.message,
    });
  }
});

module.exports = router;
