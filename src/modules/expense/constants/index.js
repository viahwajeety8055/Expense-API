const createConstants = require("./create.constants");
const updateConstants = require("./update.constants");
const resetAllConstants = require("./resetAll.constants");
const getConstants = require("./get.constants");

const expenseModuleConstants = {
  create: createConstants,
  update: updateConstants,
  resetAll: resetAllConstants,
  get: getConstants,
};

module.exports = expenseModuleConstants;
