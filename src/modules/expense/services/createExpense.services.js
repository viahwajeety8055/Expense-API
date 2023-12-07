const sharedModels = require("shared/models");

module.exports = async ({ reason, amount, userId }) => {
  const data = await sharedModels.expense.create({
    reason,
    amount,
    userId,
    isValid: 1,
  });

  return {
    expenseId: data.insertId,
  };
};
