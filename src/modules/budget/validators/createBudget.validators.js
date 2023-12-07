const sharedServices = require("shared/services");
const sharedValidators = require("shared/validators");
const budgetModuleConstants = require("../constants");

module.exports = (req) => {
  const { budget, limit } = req.body;

  if (sharedValidators.isRequired(budget)) {
    sharedServices.error.throw(
      budgetModuleConstants.createBudget.errorMessages.BCRE0001
    );
  }

  if (sharedValidators.isRequired(limit)) {
    sharedServices.error.throw(
      budgetModuleConstants.createBudget.errorMessages.BCRE0003
    );
  }

  return {
    budget: budget,
    limit: limit,
    userId: req.user_id,
  };
};
