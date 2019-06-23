const validator = require("validator");
const IsEmpty = require("../is-empty");

module.exports = function LoginValidator(data) {
  let error = {};
  data.license = !IsEmpty(data.license) ? data.license : "";

  if (validator.isEmpty(data.license)) {
    error.license = "enter license";
  } else if (!validator.isLength(data.license, { min: 7, max: 7 })) {
    error.Id = "license length must be 7";
  }

  return {
    error,
    isVaild: IsEmpty(error)
  };
};
