const storage = require("../config/multer");
// import { createRequire } from "module";
// const require = createRequire(import.meta.url);
const express = require("express");
const router = express.Router();
const towMastDataController = require("../controllers/towmast");
const multer = require("multer");
const upload = multer({ storage });
const auth = require("../auth");

router.post("/add", upload.array("files", 3), (req, res) => {
  try {
    console.log(req.files);
    if (!req.files) {
      return res.status(400).send("No files were uploaded.");
    }

    const uploadedFiles = req.files.map((file) => ({
      originalname: file.originalname,
      filename: file.filename,
    }));

    const reqBody = { ...req.body };
    uploadedFiles.map((picture, idx) => {
      reqBody[`picture${idx + 1}`] = picture.filename;
    });

    towMastDataController
      .createData(reqBody)
      .then((result) => res.send(result));
  } catch (error) {
    console.log(error);
  }
});

router.get("/get", auth.verify, (req, res) => {
  try {
    const userData = auth.decode(req.headers.authorization);

    towMastDataController
      .getAllData(userData.company)
      .then((result) => res.send(result));
  } catch (error) {
    console.log(error);
  }
});

router.get("/get/:id", async (req, res) => {
  let result = await towMastDataController.getOneData(req.params);
  res.send(result);
});

router.patch("/:id/update", (req, res) => {
  try {
    towMastDataController
      .updateDate(req.params, req.body)
      .then((result) => res.send(result));
  } catch (error) {
    console.log("error");
  }
});

router.delete("/:id/delete", (req, res) => {
  try {
    towMastDataController
      .deleteData(req.params, req.body)
      .then((result) => res.send(result));
  } catch (error) {}
});
module.exports = router;
