const loginValidators = require("./login.validators");
const registerValidators = require("./register.validators");

const authModuleValidators = {
  login: loginValidators,
  register: registerValidators,
};

module.exports = authModuleValidators;
