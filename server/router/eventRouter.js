const router = require("express").Router();
const { eventController } = require("../controller");

router.get("/", eventController.getAll);
router.get("/:id", eventController.getById);
router.post("/", eventController.createEvent);

module.exports = router;
