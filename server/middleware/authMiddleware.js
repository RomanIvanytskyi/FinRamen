const jwt = require("jsonwebtoken");


module.exports = function (req, res, next) {
  if (req.method === "OPTIONS") {
    next();
  }
  const token = req.body.token;
  if (!token) {
    return res.send({ message: "No token" });
  }
  const decodedData = jwt.verify(token, process.env.SECRET);
  if (decodedData) {
    req.user = decodedData;
  } else {
    return res.send("Bad credentials");
  }
  return next();
};