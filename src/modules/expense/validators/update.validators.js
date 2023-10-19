const sharedServices = require("shared/services");
const sharedValidators = require("shared/validators");
const expenseModuleConstants = require("../constants");

module.exports = (req) => {
  const { amount, reason, id } = req.body;

  if (
    sharedValidators.isRequired(reason) &&
    sharedValidators.isRequired(amount) &&
    sharedValidators.isRequired(id)
  ) {
    sharedServices.error.throw(
      expenseModuleConstants.update.errorMessages.EUPE0001
    );
  }

  return {
    amount,
    reason,
    id,
  };
};
