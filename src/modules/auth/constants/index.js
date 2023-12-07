const registerConstants = require("./register.constants");
const loginConstants = require("./login.constants");
const getAllUserConstants = require("./getAllUser.constants");

const authModuleConstants = {
  login: loginConstants,
  register: registerConstants,
  getAllUser: getAllUserConstants,
};

module.exports = authModuleConstants;
