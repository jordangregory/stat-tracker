var jwt = require("jsonwebtoken");
var jwtConfig = require("./jwtConfig");

function checkAuth(req, res, next) {
  var token = req.headers["x-access-token"];

  if (!token) {
    return res.status(401).send("Unauthorized user. Missing token.");
  }

  jwt.verify(token, jwtConfig.secret, function(err, tokenData) {
    if (err) {
      return res.status(400).send("Unauthorized user");
    }

    req.user = tokenData.user;
    next();
  });
}

module.exports = checkAuth;
