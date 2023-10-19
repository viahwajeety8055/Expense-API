const sharedServices = require("shared/services");
const sharedValidators = require("shared/validators");
const expensModuleConstants = require("../constants");
const expenseModuleConstants = require("../constants");

module.exports = (req) => {
  const { reason, amount } = req.body;

  if (
    sharedValidators.isRequired(reason) &&
    sharedValidators.isRequired(amount)
  ) {
    sharedServices.error.throw(
      expensModuleConstants.create.errorMessages.ECRE0001
    );
  }

  return {
    reason,
    amount: parseInt(amount),
    id: req.user_id,
  };
};
