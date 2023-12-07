const expenseModel = require("shared/models/expense.models");

module.exports = async ({ userId }) => {
  const isValid = 1;

  const data = await expenseModel.read({ userId, isValid });

  return data;
};
