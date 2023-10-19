const budgetModel = require("shared/models/budget.models");
const sharedServices = require("shared/services");
const budgetConstants = require("../constants");

module.exports = async ({ budget, budget_limit, user_id }) => {
  let data = null;

  if (budget) {
    data = await budgetModel.update({ budget }, { user_id });
    if (data.length === 0) {
      sharedServices.error.throw(budgetConstants.update.errorMessages.BUPE0003);
    }
  }

  if (budget_limit) {
    data = await budgetModel.update({ budget_limit }, { user_id });
    if (data.length === 0) {
      sharedServices.error.throw(budgetConstants.update.errorMessages.BUPE0003);
    }
  }

  return data;
};
