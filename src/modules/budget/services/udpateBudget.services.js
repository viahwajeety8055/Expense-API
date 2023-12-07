const budgetModel = require("shared/models/budget.models");
const sharedServices = require("shared/services");
const budgetConstants = require("../constants");

module.exports = async ({ budget, budgetLimit, userId }) => {
  let data = null;

  if (budget) {
    data = await budgetModel.update({ budget }, { userId });
    if (data.length === 0) {
      sharedServices.error.throw(
        budgetConstants.updateBudget.errorMessages.BUPE0003
      );
    }
  }

  if (budgetLimit) {
    data = await budgetModel.update({ budgetLimit }, { userId });
    if (data.length === 0) {
      sharedServices.error.throw(
        budgetConstants.updateBudget.errorMessages.BUPE0003
      );
    }
  }

  return {};
};
