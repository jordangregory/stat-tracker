var express = require("express");
var router = express.Router();
const User = require("../models/User");
// var jwt = require("jsonwebtoken");
// var jwtConfig = require("../jwtConfig");

router.get("/activities", function(req, res, next) {
  res.send("this is working");
});

router.post("/activities", function(req, res, next) {
  let userData = req.body;
  // let newUser = new User(userData);
  // User.create(newUser)
  //   .then(savedUser => {
  //     res.send(savedUser);
  //   })
  //   .catch(err => {
  //     res.status(500).send(err);
  //   });
  res.send(userData);
});

module.exports = router;
