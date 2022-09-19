const Router = require("express");
const router = new Router();
const controller = require("../controllers/transactionsController");



router.post("/create", controller.create);
router.put("/update", controller.update);
router.delete("/delete", controller.delete);
router.get("/get", controller.get);

module.exports = router;