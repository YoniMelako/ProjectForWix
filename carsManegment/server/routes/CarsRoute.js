const express = require("express");
const router = express.Router();
const CarModel = require("../models/Car");
const AddCarVal = require("../validation/addCar/AddCarVal");

router.get("/getallcars", (req, res) => {
  //get all cars
  CarModel.getAllCars().then(result => {
    if (result.success) {
      res.status(200).json({ result: result, cars: result.cars });
    }
  });
});

router.post("/addcar", (req, res) => {
  //add car to db
  console.log(req.body);

  const { error, isVaild } = AddCarVal(req.body);
  if (!isVaild) return res.status(207).json({ error: error });

  CarModel.addCar(req.body).then(result => {
    if (result.success) {
      res.status(200).json({ result: result, msg: "the car added to db" });
    } else if (result.error) {
      res.status(207).json({
        error: result.error,
        msg: "license number already exist or license not match"
      });
    }
  });
});

router.post("/deletecar", (req, res) => {
  //delete car from db
  CarModel.deleteCar(req.body).then(result => {
    if (result.success) {
      res.status(200).json({ result: result, msg: "the car deleted from db" });
    } else if (result.error) {
      res.status(207).json({
        error: result.error,
        msg: "license number not match or maybe something wrong"
      });
    }
  });
});

router.post("/getcar", (req, res) => {
  //get car from db
  CarModel.getCar(req.body).then(result => {
    if (result.success) {
      res.status(200).json({
        result: result,
        car: result.car,
        msg: "the car info"
      });
    } else if (result.error) {
      res.status(207).json({
        error: result.error,
        msg: "license number not match any"
      });
    }
  });
});

module.exports = router;
