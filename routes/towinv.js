const express = require("express");
const router = express.Router();
const towinvController = require("../controllers/towinv");

router.post("/add", (req, res) => {
  try {
    towinvController.createData(req.body).then((result) => res.send(result));
  } catch (error) {
    console.log(error);
  }
});

router.get("/get", (req, res) => {
  try {
    towinvController.getAllData().then((result) => res.send(result));
  } catch (error) {
    console.log(error);
  }
});

router.get("/get/:id", async (req, res) => {
  let result = await towinvController.getOneData(req.params);
  res.send(result);
});

router.patch("/:id/update", (req, res) => {
  try {
    towinvController
      .updateDate(req.params, req.body)
      .then((result) => res.send(result));
  } catch (error) {
    console.log("error");
  }
});

router.delete("/:id/delete", (req, res) => {
  try {
    towinvController
      .deleteData(req.params, req.body)
      .then((result) => res.send(result));
  } catch (error) {}
});
module.exports = router;
