const express = require("express");
const router = express.Router();
const truckController = require("../controllers/truck");

router.get("/get", (req, res) => {
  try {
    truckController.getAllData().then((result) => res.send(result));
  } catch (error) {
    console.log(error);
  }
});

router.get("/get/:id", async (req, res) => {
  let result = await truckController.getOneData(req.params);
  res.send(result);
});

router.patch("/:id/update", (req, res) => {
  try {
    truckController
      .updateDate(req.params, req.body)
      .then((result) => res.send(result));
  } catch (error) {
    console.log("error");
  }
});

router.delete("/:id/delete", (req, res) => {
  try {
    truckController
      .deleteData(req.params, req.body)
      .then((result) => res.send(result));
  } catch (error) {}
});
module.exports = router;
