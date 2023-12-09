const { error } = require("shared/services");
const sharedValidators = require("shared/validators");
const expenseModuleConstants = require("../constants");

module.exports = (req) => {
  const { amount, reason, expenseId } = req.query;

  if (sharedValidators.isRequired(reason)) {
    error.throw(expenseModuleConstants.updateExpense.errorMessages.EUPE0005);
  }

  if (sharedValidators.isRequired(amount)) {
    error.throw(expenseModuleConstants.updateExpense.errorMessages.EUPE0004);
  }

  if (sharedValidators.isRequired(expenseId)) {
    error.throw(expenseModuleConstants.updateExpense.errorMessages.EUPE0001);
  }

  return {
    amount,
    reason,
    expenseId,
  };
};
