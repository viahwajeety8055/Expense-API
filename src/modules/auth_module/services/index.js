const loginService = require("./login.services");
const registerService = require("./register.services");

const authServicesModule = {
  login: loginService,
  register: registerService,
};

module.exports = authServicesModule;
