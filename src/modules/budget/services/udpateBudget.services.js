const budgetModel = require("shared/models/budget.models");
const sharedServices = require("shared/services");
const budgetConstants = require("../constants");

module.exports = async ({ budget, redAlert, userId }) => {
  const data = await budgetModel.update({ budget, redAlert }, { userId });

  return {};
};
