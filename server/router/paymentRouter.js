const router = require("express").Router();
const { paymentController } = require("../controller")

router.post("/", paymentController.pay);

module.exports = router;