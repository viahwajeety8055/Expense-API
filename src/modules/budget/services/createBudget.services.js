const budgetModel = require("shared/models/budget.models");
const { error } = require("shared/services");
const budgetModuleConstants = require("../constants");

module.exports = async ({ budget, limit, userId }) => {
  const budgeData = await budgetModel.read({ userId });

  if (budgeData.length)
    error.throw(budgetModuleConstants.createBudget.errorMessages.BCRE0004);

  const data = await budgetModel.create({
    budget,
    limit,
    userId,
  });

  return {
    budgetId: data.insertId,
  };
};
