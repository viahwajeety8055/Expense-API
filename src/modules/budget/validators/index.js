const createBudgetValidators = require("./createBudget.validators");
const getBudgetValidators = require("./getBudget.validators");
const updateBudgetValidators = require("./updateBudget.validators");

const budgetModuleValidators = {
  createBudget: createBudgetValidators,
  updateBudget: updateBudgetValidators,
  getBudget: getBudgetValidators,
};

module.exports = budgetModuleValidators;
