const sharedValidators = require("shared/validators");
const expenseConstants = require("../constants");
const { error } = require("shared/services");

module.exports = (req) => {
  const { budget, limit } = req.body;

  if (sharedValidators.isRequired(budget)) {
    error.throw(expenseConstants.updateBudget.errorMessages.BUPE0001);
  }

  if (sharedValidators.isRequired(limit)) {
    error.throw(expenseConstants.updateBudget.errorMessages.BUPE0004);
  }

  return {
    budget,
    limit,
    userId: req.user_id,
  };
};
