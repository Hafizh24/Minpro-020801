const router = require("express").Router();
const { paymentController } = require("../controller");
const { verifyToken } = require("../middleware/auth");

router.post("/", paymentController.pay);
// router.get("/:id", paymentController.getDiscount)

module.exports = router;