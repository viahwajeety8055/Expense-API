const sharedModels = require("shared/models");

module.exports = async ({ reason, amount, userId }) => {
  const data = await sharedModels.expense.create({
    reason,
    amount,
    userId,
    isValid: 1,
  });

  const budget = await sharedModels.budget.read({ userId });

  let totalExpense = amount;

  if (budget.length) {
    totalExpense = parseInt(budget[0].totalExpense) + parseInt(amount);
  }

  await sharedModels.budget.update({ totalExpense }, { userId });

  return {
    expenseId: data.insertId,
  };
};
