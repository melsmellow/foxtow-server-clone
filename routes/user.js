const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");

router.get("/get", (req, res) => {
  try {
    userController.getAllData(req.body).then((result) => res.send(result));
  } catch (error) {
    console.log(error);
  }
});

router.post("/register", (req, res) => {
  console.log(req.body);
  try {
    userController.registerUser(req.body).then((result) => res.send(result));
  } catch (error) {
    console.log(error);
  }
});

router.post("/login", (req, res) => {
  console.log(req.body);
  try {
    userController
      .userLogin(req.body, req.fields)
      .then((result) => res.send(result));
  } catch (error) {
    console.log(error);
  }
});

router.post("/logout", (req, res) => {
  const token = req.header("Authorization");

  if (token) {
    // tokenBlacklist.add(token);
    return res.json({ message: "Token blacklisted" });
  } else {
    return res.status(400).json({ message: "Token not provided" });
  }
});

router.get("/:id/details", (req, res) => {
  try {
    userController
      .getUserDetails(req.params.id)
      .then((result) => res.send(result));
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
