const expenseModel = require("shared/models/expense.models");

module.exports = async ({ reason, amount, id }) => {
  const isValid = 0;

  const data = await expenseModel.create({
    reason,
    amount,
    id,
    isValid,
  });

  return data;
};
