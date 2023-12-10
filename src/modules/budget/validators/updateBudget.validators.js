const sharedValidators = require("shared/validators");
const expenseConstants = require("../constants");
const { error } = require("shared/services");

module.exports = (req) => {
  const { budget, redAlert } = req.query;

  const { user_id } = req;

  if (sharedValidators.isRequired(budget)) {
    error.throw(expenseConstants.updateBudget.errorMessages.BUPE0001);
  }

  if (sharedValidators.isRequired(redAlert)) {
    error.throw(expenseConstants.updateBudget.errorMessages.BUPE0004);
  }

  return {
    budget,
    redAlert,
    userId: user_id,
  };
};
