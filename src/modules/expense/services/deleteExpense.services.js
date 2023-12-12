const sharedModel = require("shared/models");
const { error } = require("shared/services");
const expenseConstants = require("../constants");

module.exports = async ({ expenseId, userId }) => {
  const expense = await sharedModel.expense.read({ expenseId });

  if (expense.length == 0) {
    error.throw(expenseConstants.deleteExpense.errorMessages.EDEE0002);
  }

  const budget = await sharedModel.budget.read({ userId });

  let updatedAmount = budget[0].totalExpense - expense[0].amount;

  if (updatedAmount < 0) {
    updatedAmount = 0;
  }

  await sharedModel.budget.update({ totalExpense: updatedAmount }, { userId });

  await sharedModel.expense.update({ isValid: 0 }, { expenseId });

  return {};
};
