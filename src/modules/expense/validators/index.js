const createValidators = require("./create.validators");
const updateValidators = require("./update.validators");
const resetAllValidators = require("./resetAll.validators");
const getValidators = require("./get.validators");

const expenseModuleValidators = {
  create: createValidators,
  update: updateValidators,
  resetAll: resetAllValidators,
  get: getValidators,
};

module.exports = expenseModuleValidators;
