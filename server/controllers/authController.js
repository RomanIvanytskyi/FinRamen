const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const generateAccessToken = (id) => {
  let payload = { id };
  return jwt.sign(payload, process.env.SECRET, { expiresIn: "24h" });
};

class authController {
  async register(req, res) {
    try {
      const { name, password, email} = req.body;
      const isExist = await User.findOne({ name });
      if (isExist) {
        return res.send({ message: "User already exist" });
      }
      const hashPassword = bcrypt.hashSync(password, 7);
      const user = new User({
        name,
        password: hashPassword,
        email,
      });
      await user.save();

      const token = generateAccessToken(user._id);
      return res.json({ token, userId: user._id });
    } catch (e) {
      res.send({ message: "Registration error"});
    }
  }
  async login(req, res) {
    try {
      const { password, email } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
        return res.send({ message: `Bad credentials` });
      }

      const validPassword = bcrypt.compareSync(password, user.password);
      if (!validPassword) {
        return res.send({ message: `Bad credentials` });
      }

      const token = generateAccessToken(user.id);

      return res.json({ token });
    } catch (e) {
      res.send({ message: "Login error" });
    }
  }
  async me(req, res) {
    const userId = await req.user.id;
    const user = await User.findOne({ _id: userId });
    return res.send(user);
  }
}

module.exports = new authController();
