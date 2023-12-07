const generateValidators = require("./generate.validators");
const validateValidators = require("./validate.validators");

const otpModuleValidators = {
  generate: generateValidators,
  validate: validateValidators,
};

module.exports = otpModuleValidators;
