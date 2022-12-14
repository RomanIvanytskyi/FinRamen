const Router = require("express");
const router = new Router();
const controller = require("../controllers/categoryController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/create", authMiddleware, controller.create);
router.put("/update", authMiddleware, controller.update);
router.post("/delete", authMiddleware, controller.delete);
router.post("/get", controller.get);

module.exports = router;
