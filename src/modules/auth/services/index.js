const loginService = require("./login.services");
const registerService = require("./register.services");
const getAllUserService = require("./getAllUsers.services");

const authServicesModule = {
  login: loginService,
  register: registerService,
  getAllUser: getAllUserService,
};

module.exports = authServicesModule;
