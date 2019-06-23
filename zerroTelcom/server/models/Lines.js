const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LinesSchema = Schema({
  name: { type: String, required: true },
  call_minutes: { type: String, required: true },
  internet_giga: { type: String, required: true },
  overseas_calls: { type: String, required: true },
  price: { type: Number, required: true },
  isActive: { type: Boolean, default: true },
  AddDate: { type: Date, default: Date.now() }
});

const Lines = mongoose.model("line", LinesSchema);

addLine = data => {
  let newline = Lines({
    name: "gold",
    call_minutes: "100",
    internet_giga: "100",
    overseas_calls: "100",
    price: 50
  });

  newline
    .save()
    .then(result => {
      if (result) {
        console.log(result);
      }
    })
    .catch(err => {
      console.log(err);
      console.log(err);
    });
};

getAllLines = () => {
  return new Promise((resolve, reject) => {
    Lines.find().then(lines => {
      if (lines) {
        return resolve({ success: true, lines: lines });
      } else {
        return resolve({ error: "something goes wrong" });
      }
    });
  });
};

module.exports = {
  getAllLines: getAllLines,
  addLine: addLine
};
