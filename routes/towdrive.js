const express = require("express");
const router = express.Router();
const towDriveDataController = require("../controllers/towdrive");

router.post("/add", (req, res) => {
  console.log(req.body);
  try {
    towDriveDataController
      .createData(req.body)
      .then((result) => res.send(result));
  } catch (error) {
    console.log(error);
  }
});

router.get("/get", (req, res) => {
  try {
    towDriveDataController.getAllData().then((result) => res.send(result));
  } catch (error) {
    console.log(error);
  }
});

router.get("/get/:id", async (req, res) => {
  let result = await towDriveDataController.getOneData(req.params);
  res.send(result);
});

router.put("/:id/update", (req, res) => {
  try {
    towDriveDataController
      .updateDate(req.params, req.body)
      .then((result) => res.send(result));
  } catch (error) {
    console.log("error");
  }
});

router.delete("/:id/delete", (req, res) => {
  try {
    towDriveDataController
      .deleteData(req.params, req.body)
      .then((result) => res.send(result));
  } catch (error) {}
});
module.exports = router;
