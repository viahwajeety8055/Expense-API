const generateConstants = require("./generate.constants");
const validateConstants = require("./validate.constants");

const otpModuleConstants = {
  generate: generateConstants,
  validate: validateConstants,
};

module.exports = otpModuleConstants;
