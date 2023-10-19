const userModels = require("./user.models");
const expenseModels = require("./expense.models");

const sharedModels = {
  user: userModels,
  expense: expenseModels,
};

module.exports = sharedModels;
