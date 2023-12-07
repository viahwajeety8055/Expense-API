const generateService = require("./generate.services");
const validateService = require("./validate.services");

const otpModuleServices = {
  generate: generateService,
  validate: validateService,
};

module.exports = otpModuleServices;
