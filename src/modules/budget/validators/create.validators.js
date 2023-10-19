const sharedServices = require("shared/services");
const sharedValidators = require("shared/validators");
const budgetModuleConstants = require("../constants");

module.exports = (req) => {
  const { budget, limit } = req.body;

  if (
    sharedValidators.isRequired(budget) &&
    sharedValidators.isRequired(limit)
  ) {
    sharedServices.error.throw(
      budgetModuleConstants.create.errorMessages.BCRE0001
    );
  }

  return {
    budget: parseInt(budget),
    limit: parseInt(limit),
    id: req.user_id,
  };
};
