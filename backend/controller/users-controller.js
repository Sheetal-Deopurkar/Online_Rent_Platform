const HttpError = require("../models/http-error");
const { v4: uuid } = require("uuid");
const { validationResult } = require("express-validator");

const User = require("../models/user");

/*
let DUMMY_USERS = [
  {
    id: "u1",
    name: "Sheetal",
    email: "Sheetal@gmail.com",
    password: "test1",
  },
  {
    id: "u2",
    name: "Max",
    email: "Max@gmail.com",
    password: "test2",
  },
];*/

// Function for getting USERS
const getUsers = async (req, res, next) => {
  let users;
  try {
    users = await User.find({}, "-password");
  } catch (err) {
    return next(new HttpError("Error is getting users data", 404));
  }
  console.log(users);
  res.json({ users: users.map((u) => u.toObject({ getters: true })) });
};

//Function for user login
const login = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    throw new HttpError(
      "Please enter valid credentials before procceding...",
      422
    );
  }
  const { email, password } = req.body;
  let hasUser;
  try {
    hasUser = await User.findOne({ email: email });
  } catch (err) {
    return next(new HttpError("Credentials not matching...", 500));
  }
  if (!hasUser || hasUser.password !== password) {
    return next(new HttpError("Credentials not correct", 401));
  }
  console.log("User successfully logged in!!!");

  res.status(200).json("User successfully logged in!!!");
};

exports.getUsers = getUsers;
exports.login = login;
