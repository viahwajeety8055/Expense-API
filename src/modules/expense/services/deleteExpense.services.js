const expenseModel = require("shared/models/expense.models");
const { error } = require("shared/services");
const expenseConstants = require("../constants");

module.exports = async ({ expenseId }) => {
  const expense = await expenseModel.read({ expenseId });

  if (expense.length == 0) {
    error.throw(expenseConstants.deleteExpense.errorMessages.EDEE0002);
  }

  await expenseModel.update({ isValid: 0 }, { expenseId });

  return {};
};
