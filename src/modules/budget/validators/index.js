const createBudgetValidators = require("./createBudget.validators");
const updateBudgetValidators = require("./updateBudget.validators");

const budgetModuleValidators = {
  createBudget: createBudgetValidators,
  updateBudget: updateBudgetValidators,
};

module.exports = budgetModuleValidators;
