const updateBudgetServices = require("./udpateBudget.services");
const createBudgetServices = require("./createBudget.services");
const getBudgetServices = require("./getBudget.services");

const budgetServicesModule = {
  createBudget: createBudgetServices,
  updateBudget: updateBudgetServices,
  getBudget: getBudgetServices,
};

module.exports = budgetServicesModule;
