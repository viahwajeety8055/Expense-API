const sharedModels = require("shared/models");
const { emailServices } = require("shared/services");

module.exports = async ({ reason, amount, userId }) => {
  const data = await sharedModels.expense.create({
    reason,
    amount,
    userId,
    isValid: 1,
  });

  const budget = await sharedModels.budget.read({ userId });

  const user = await sharedModels.user.read({ userId });

  let totalExpense = amount;

  if (budget.length) {
    totalExpense = parseInt(budget[0].totalExpense) + parseInt(amount);

    if (totalExpense > parseInt(budget[0].redAlert)) {
      const subject = "Alert!";
      const message = "Your total expenses have exceeded your alert limit.";
      emailServices({ email: user[0].email, subject, message });
    }
  }

  await sharedModels.budget.update({ totalExpense }, { userId });

  return {
    expenseId: data.insertId,
  };
};
