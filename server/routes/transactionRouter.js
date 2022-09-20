const Router = require("express");
const router = new Router();
const controller = require("../controllers/transactionsController");



router.post("/create", controller.create);
router.put("/update", controller.update);
router.post("/delete", controller.delete);
router.post("/get", controller.get);

module.exports = router;