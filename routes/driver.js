const express = require("express");
const router = express.Router();
const driverController = require("../controllers/driver");

router.get("/get", (req, res) => {
  try {
    driverController.getAllData().then((result) => res.send(result));
  } catch (error) {
    console.log(error);
  }
});

router.get("/get/:id", async (req, res) => {
  let result = await driverController.getOneData(req.params);
  res.send(result);
});

router.patch("/:id/update", (req, res) => {
  try {
    driverController
      .updateDate(req.params, req.body)
      .then((result) => res.send(result));
  } catch (error) {
    console.log("error");
  }
});

router.delete("/:id/delete", (req, res) => {
  try {
    driverController
      .deleteData(req.params, req.body)
      .then((result) => res.send(result));
  } catch (error) {}
});
module.exports = router;
