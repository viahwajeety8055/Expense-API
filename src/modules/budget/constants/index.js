const createBudgetConstants = require("./createBudget.constants");
const updateBudgetConstants = require("./updateBudget.constants");
const getBudgetConstants = require("./getBudget.constants");

const budgetModuleConstants = {
  createBudget: createBudgetConstants,
  updateBudget: updateBudgetConstants,
  getBudget: getBudgetConstants,
};

module.exports = budgetModuleConstants;
