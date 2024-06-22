const express = require("express");
const {
  registerUser,
  getUsers,
  authUser,
} = require("../../app/controllers/userCtrl");
const router = express.Router();

router.route("/register").post(registerUser);
router.route("/users").get(getUsers);
router.route("/login").post(authUser);

module.exports = router;
