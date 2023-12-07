const expenseModel = require("shared/models/expense.models");
const { error } = require("shared/services");
const expenseConstants = require("../constants");

module.exports = async ({ reason, amount, expenseId }) => {
  const expense = await expenseModel.read({ expenseId });

  if (expense.length == 0) {
    error.throw(expenseConstants.updateExpense.errorMessages.EUPE0003);
  }

  await expenseModel.update({ reason, amount }, { expenseId });

  return {};
};
