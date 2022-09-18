const jwt = require("jsonwebtoken");
const { secret } = require("../config");

module.exports = function (req, res, next) {
  if (req.method === "OPTIONS") {
    next();
  }
  const token = req.body.token;
  if (!token) {
    return res.send({ message: "No token" });
  }
  const decodedData = jwt.verify(token, secret);
  if (decodedData) {
    req.user = decodedData;
  } else {
    return res.send("Bad credentials");
  }
  return next();
};