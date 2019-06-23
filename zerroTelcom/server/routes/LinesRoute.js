const express = require("express");
const router = express.Router();
const LinesModel = require("../models/Lines");

router.get("/getlines", (req, res) => {
  LinesModel.getAllLines().then(result => {
    if (result.success) {
      console.log(result.lines);

      res.status(200).json({ success: "", lines: result.lines });
    }
  });
});

router.post("/addline"),
  (req, res) => {
    LinesModel.addLine();
  };
module.exports = router;
