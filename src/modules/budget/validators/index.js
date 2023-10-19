const createValidators = require("./create.validators");
const updateValidators = require("./update.validators");

const budgetModuleValidators = {
  create: createValidators,
  update: updateValidators,
};

module.exports = budgetModuleValidators;
