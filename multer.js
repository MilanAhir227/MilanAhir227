const multer = require("multer");
const path = require("path");
const fs = require("fs");

const uploadMultiple = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 1000000 }, // 1MB limit
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
}).array("image", 12); // Accepts up to 12 images with the name "image"

const upload = multer({
  storage: multer.memoryStorage(),
  // limits: { fileSize: 1000000 }, // 1MB limit
  fileFilter: function (req, file, cb) {
    console.log(file);
    console.log(cb());
    checkFileType(file, cb);
  },
}).single("image"); // Accepts a single image with the name "image"

// Check file Type
function checkFileType(file, cb) {
  const fileTypes = /jpeg|jpg|png|gif/;
  const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());
  const mimeType = fileTypes.test(file.mimetype);

  if (mimeType && extName) {
    return cb(null, true);
  } else {
    cb("Error: Images Only !!!");
  }
}


module.exports = {
  upload
};
