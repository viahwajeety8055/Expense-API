const budgetModel = require("shared/models/budget.models");

module.exports = async () => {
  const data = await budgetModel.read();

  return data;
};
