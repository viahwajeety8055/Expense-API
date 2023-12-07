const expenseModel = require("shared/models/expense.models");
const { error } = require("shared/services");
const expenseConstants = require("../constants");

module.exports = async ({ userId }) => {
  const expense = await expenseModel.read({ userId });

  if (expense.length === 0) {
    error.throw(expenseConstants.resetAllExpense.errorMessages.EDLE0001);
  }

  const isValid = 0;

  const data = await expenseModel.update({ isValid }, { userId });

  return data;
};
