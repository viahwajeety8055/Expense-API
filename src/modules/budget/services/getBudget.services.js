const budgetModel = require("shared/models/budget.models");
const { error } = require("shared/services");
const budgetModuleConstants = require("../constants");

module.exports = async ({ userId }) => {
  const budget = await budgetModel.read({ userId });

  if (!budget.length) {
    error.throw(budgetModuleConstants.getBudget.errorMessages.BGTE0002);
  }

  const result = {};

  result.userId = budget[0].userId;
  result.budgetId = budget[0].budgetId;
  result.budget = budget[0].budget;
  result.totalExpense = budget[0].totalExpense;
  result.redAlert = budget[0].redAlert;

  return result;
};
