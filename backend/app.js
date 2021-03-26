const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const usersRoutes = require("./routes/users-route");
const HttpError = require("./models/http-error");
//
const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requesed-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
  next();
});

app.use("/api/users", usersRoutes); // => /api/users

app.use((req, res, next) => {
  const error = new HttpError("Could not find this route", 404);
  throw error;
});

const uri = "mongodb://localhost:27017/Educrack_UserData";

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("Connection successfull!!! ", mongoose.connection.readyState);
    app.listen(5000);
  })
  .catch(() => {
    console.log("Connection to DB failed...");
  });
