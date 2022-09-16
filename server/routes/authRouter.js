const Router = require("express");
const router = new Router();
const controller = require("../controllers/authController");


router.post("/login", controller.login);
router.post("/register", controller.register);
router.post("/me", controller.me);

module.exports = router;