const userModels = require("./user.models");
const expenseModels = require("./expense.models");
const budgetModels = require("./budget.models");

const sharedModels = {
  user: userModels,
  expense: expenseModels,
  budget: budgetModels,
};

module.exports = sharedModels;
