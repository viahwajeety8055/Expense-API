const createExpenseService = require("./createExpense.services");
const updateExpenseService = require("./updateExpense.services");
const resetAllExpenseService = require("./resetAllExpense.services");
const getExpenseService = require("./getExpense.services");
const deleteExpenseService = require("./deleteExpense.services");

const expenseServicesModule = {
  createExpense: createExpenseService,
  updateExpense: updateExpenseService,
  resetAllExpense: resetAllExpenseService,
  getExpense: getExpenseService,
  deleteExpense: deleteExpenseService,
};

module.exports = expenseServicesModule;
