const budgetModel = require("shared/models/budget.models");

module.exports = async ({ budget, limit, id }) => {
  const data = await budgetModel.create({
    budget,
    limit,
    id,
  });

  return data;
};
