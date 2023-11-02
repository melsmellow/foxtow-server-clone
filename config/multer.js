const multer = require("multer");
const fs = require("fs");

// Configure Multer to store uploaded files in a folder
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const directory = "public/uploads";
    if (!fs.existsSync(directory)) {
      fs.mkdirSync(directory);
    }
    cb(null, directory); // Set your upload folder path
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname); // Rename the file with a timestamp
  },
});

module.exports = storage;
