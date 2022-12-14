const Router = require("express");
const router = new Router();
const controller = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware")


router.post("/login", controller.login);
router.post("/register", controller.register);
router.post("/me",authMiddleware, controller.me);
router.put("/update", controller.editUserData)
router.delete("/delete", controller.deleteUser)

module.exports = router;