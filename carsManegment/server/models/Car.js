const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CarSchema = Schema({
  license: { type: String, minlength: 7, maxlength: 7 },
  color: { type: String },
  modelYear: { type: Number },
  modelMonth: { type: Number, min: 1, max: 12 }
});

const Cars = mongoose.model("Car", CarSchema);

getAllCars = () => {
  return new Promise((resolve, reject) => {
    Cars.find().then(cars => {
      if (cars) {
        return resolve({ success: true, cars: cars });
      } else {
        return resolve({ error: "something goes wrong" });
      }
    });
  });
};

getCar = data => {
  return new Promise((resolve, reject) => {
    Cars.findOne({ license: data.license }).then(car => {
      if (car) {
        return resolve({ success: true, car: car });
      } else {
        return resolve({ error: "the car not exist" });
      }
    });
  });
};

addCar = data => {
  return new Promise((resolve, reject) => {
    Cars.findOne({ license: data.license }).then(car => {
      if (car) {
        return resolve({
          error: "license number already exist or license not match"
        });
      } else {
        let Car = Cars({
          license: data.license,
          color: data.color,
          modelYear: data.modelYear,
          modelMonth: data.modelMonth
        });

        Car.save()
          .then(result => {
            if (result) {
              return resolve({ success: true });
            }
          })
          .catch(err => {
            console.log(err);
            return resolve({ error: err.message });
          });
      }
    });
  });
};

deleteCar = data => {
  return new Promise((resolve, reject) => {
    Cars.findOne({ license: data.license }).then(car => {
      if (car) {
        Cars.remove(car).then(done => {
          console.log(done.deletedCount);
          return resolve({ success: true });
        });
      } else {
        return resolve({
          error: "somethong wrong maybe this license not match"
        });
      }
    });
  });
};

module.exports = {
  addCar: addCar,
  getAllCars: getAllCars,
  deleteCar: deleteCar,
  getCar: getCar
};
