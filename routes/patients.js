const express = require("express");
const router = express.Router();

// @route   GET api/patients
// @desc    Get all users patients
//@access   Private
router.get("/", (req, res) => {
  res.send("Get all patients");
});

// @route   POST api/patients
// @desc    Add new patient
//@access   Private
router.post("/", (req, res) => {
  res.send("log in user");
});

// @route   PUT api/patients/:id
// @desc    Update patient
//@access   Private
router.put("/:id", (req, res) => {
  res.send("Update patients");
});

// @route   DELETE api/patients/:id
// @desc    DELETE patient
//@access   Private
router.delete("/:id", (req, res) => {
  res.send("DELETE contact");
});

module.exports = router;
