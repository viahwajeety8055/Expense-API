const sharedValidators = require("shared/validators");
const expensModuleConstants = require("../constants");
const { error } = require("shared/services");

module.exports = (req) => {
  const { reason, amount } = req.body;

  if (sharedValidators.isRequired(reason)) {
    error.throw(expensModuleConstants.createExpense.errorMessages.ECRE0001);
  }

  if (sharedValidators.isRequired(amount)) {
    error.throw(expensModuleConstants.createExpense.errorMessages.ECRE0003);
  }

  return {
    reason,
    amount,
    userId: req.user_id,
  };
};
