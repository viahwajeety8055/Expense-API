const sharedServices = require("shared/services");
const sharedValidators = require("shared/validators");
const budgetModuleConstants = require("../constants");
const updateConstants = require("../constants");

module.exports = (req) => {
  const budget = req.body.hasOwnProperty("budget") ? req.body.budget : null;

  const budget_limit = req.body.hasOwnProperty("budget_limit")
    ? req.body.budget_limit
    : null;

  if (
    sharedValidators.isRequired(budget) &&
    sharedValidators.isRequired(budget_limit)
  ) {
    sharedServices.error.throw(updateConstants.update.errorMessages.BUPE0001);
  }

  return {
    budget,
    budget_limit,
    user_id: req.user_id,
  };
};
