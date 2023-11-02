const express = require("express");
const router = express.Router();
const reasonController = require("../controllers/reason");

router.get("/get", (req, res) => {
  try {
    reasonController.getAllData().then((result) => res.send(result));
  } catch (error) {
    console.log(error);
  }
});

router.get("/get/:id", async (req, res) => {
  let result = await reasonController.getOneData(req.params);
  res.send(result);
});

router.patch("/:id/update", (req, res) => {
  try {
    reasonController
      .updateDate(req.params, req.body)
      .then((result) => res.send(result));
  } catch (error) {
    console.log("error");
  }
});

router.delete("/:id/delete", (req, res) => {
  try {
    reasonController
      .deleteData(req.params, req.body)
      .then((result) => res.send(result));
  } catch (error) {}
});
module.exports = router;
