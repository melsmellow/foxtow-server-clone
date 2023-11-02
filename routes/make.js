const express = require("express");
const router = express.Router();
const makeController = require("../controllers/make");

router.post("/add", (req, res) => {
  try {
    makeController.createData(req.body).then((result) => res.send(result));
  } catch (error) {
    console.log(error);
  }
});

router.get("/get", (req, res) => {
  try {
    makeController.getAllData().then((result) => res.send(result));
  } catch (error) {
    console.log(error);
  }
});

router.get("/get/:id", async (req, res) => {
  let result = await makeController.getOneData(req.params);
  res.send(result);
});

router.patch("/:id/update", (req, res) => {
  try {
    makeController
      .updateDate(req.params, req.body)
      .then((result) => res.send(result));
  } catch (error) {
    console.log("error");
  }
});

router.delete("/:id/delete", (req, res) => {
  try {
    makeController
      .deleteData(req.params, req.body)
      .then((result) => res.send(result));
  } catch (error) {}
});
module.exports = router;
