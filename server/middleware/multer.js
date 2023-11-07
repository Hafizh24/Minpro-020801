const multer = require("multer");

module.exports = {
  multerUpload: () => {
    const storage = multer.diskStorage({
      destination: (req, file, cb) => {
        cb(null, "./public");
      },
      filename: (req, file, cb) => {
        cb(
          null,
          "PIMG" +
            "-" +
            Date.now() +
            Math.round(Math.random() * 1000000) +
            "." +
            file.mimetype.split("/")[1]
        );
      },
    });
    const fileFilter = (req, file, cb) => {
      const extFilter = ["jpg", "jpeg", "png", "webp"];
      const checkEct = extFilter.includes(file.mimetype.split("/")[1].toLowerCase());

      if (checkEct) {
        cb(null, true);
      } else {
        cb(new Error("file format not match"));
      }
    };
    return multer({ storage, fileFilter });
  },
};
