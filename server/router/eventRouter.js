const router = require("express").Router();
const { eventController } = require("../controller");
const { multerUpload } = require("../middleware/multer");

router.get("/", eventController.getAll);
router.get("/:id", eventController.getById);
router.post("/", multerUpload().single("file"), eventController.createEvent);

module.exports = router;
