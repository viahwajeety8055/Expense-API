const sharedValidators = require("shared/validators");
const expensModuleConstants = require("../constants");
const { error } = require("shared/services");

module.exports = (req) => {
  const { expenseId } = req.params;
  const { user_id } = req;

  if (sharedValidators.isRequired(expenseId)) {
    error.throw(expensModuleConstants.deleteExpense.errorMessages.EDEE0001);
  }

  return {
    expenseId,
    userId: user_id,
  };
};
