const budgetModel = require("shared/models/budget.models");

module.exports = async (userId) => {
  const budget = await budgetModel.read({ userId });

  const modfifiedBudget = budget.map((b) => {
    return {
      userId: userId,
      budgetId: b.budgetId,
      budgetLimit: b.limit,
    };
  });

  return modfifiedBudget;
};
