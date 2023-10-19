const expenseModel = require("shared/models/expense.models");

module.exports = async ({ user_id }) => {
  const isValid = 0;

  const data = await expenseModel.read({ user_id, isValid });

  return data;
};
