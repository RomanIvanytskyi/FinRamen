const Router = require("express");
const router = new Router();
const controller = require("../controllers/transactionsController");
const authMiddleware = require("../middleware/authMiddleware")


router.post("/create",authMiddleware, controller.create);
router.put("/update",authMiddleware, controller.update);
router.post("/delete",authMiddleware, controller.delete);
router.post("/get",authMiddleware, controller.get);
router.get("/search", authMiddleware, controller.search)
module.exports = router;