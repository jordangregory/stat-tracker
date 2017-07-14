var express = require("express");
var router = express.Router();
const User = require("../models/Activity");
// var jwt = require("jsonwebtoken");
// var jwtConfig = require("../jwtConfig");

router.get("/activities", function(req, res) {
  res.send("this is working");
});

router.post("/activities", function(req, res) {
  let userData = req.body.user;
  let newUser = new User(userData);
  newUser
    .save()
    .then(savedUser => {
      res.send(savedUser);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

module.exports = router;
