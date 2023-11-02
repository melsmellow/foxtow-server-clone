const express = require("express");
const router = express.Router();
const companyController = require("../controllers/company");

router.post("/add", (req, res) => {
  try {
    companyController.createData(req.body).then((result) => res.send(result));
  } catch (error) {
    console.log(error);
  }
});

router.get("/get", (req, res) => {
  try {
    companyController.getAllData().then((result) => res.send(result));
  } catch (error) {
    console.log(error);
  }
});

router.get("/get/:id", async (req, res) => {
  let result = await companyController.getOneData(req.params);
  res.send(result);
});

router.patch("/:id/update", (req, res) => {
  try {
    companyController
      .updateDate(req.params, req.body)
      .then((result) => res.send(result));
  } catch (error) {
    console.log("error");
  }
});

router.delete("/:id/delete", (req, res) => {
  try {
    companyController
      .deleteData(req.params, req.body)
      .then((result) => res.send(result));
  } catch (error) {}
});
module.exports = router;
