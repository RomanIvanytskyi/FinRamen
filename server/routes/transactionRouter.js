const Router = require("express");
const router = new Router();
const controller = require("../controllers/transactionsController");



router.post("/create", controller.create);
router.post("/update", controller.update);
router.post("/delete", controller.delete);
router.get("/getTransactions", controller.get);

module.exports = router;