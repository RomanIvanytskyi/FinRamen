const User = require("../models/User");

class authController {
  async register(req, res) {
    try {
      const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      });
      await user.save();
      res.send(user);
      return;
    } catch (e) {
      return res.send({ err: e });
    }
  }
  async login(req, res) {
    try {
      
    } catch (e) {

    }
  }
  async me(req, res) {
    try {
      
    } catch (e) {

    }
  }
}

module.exports = new authController();
