const express = require("express");
const { check } = require("express-validator");
const userController = require("../controller/users-controller");

const router = express.Router();

router.get("/", userController.getUsers);

router.post(
  "/login",
  [check("email").notEmpty(), check("password").isLength({ min: 4 })],
  userController.login
);

module.exports = router;
