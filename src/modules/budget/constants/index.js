const createConstants = require("./create.constants");
const updateConstants = require("./update.constants");
const getConstants = require("./get.constants");

const budgetModuleConstants = {
  create: createConstants,
  update: updateConstants,
  get: getConstants,
};

module.exports = budgetModuleConstants;
