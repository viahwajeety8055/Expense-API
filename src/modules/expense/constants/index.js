const createExpenseConstants = require("./createExpense.constants");
const updateExpenseConstants = require("./updateExpense.constants");
const resetAllExpenseConstants = require("./resetAllExpense.constants");
const getExpenseConstants = require("./getExpense.constants");
const deleteExpenseConstants = require("./deleteExpense.constants");

const expenseModuleConstants = {
  createExpense: createExpenseConstants,
  updateExpense: updateExpenseConstants,
  resetAllExpense: resetAllExpenseConstants,
  getExpense: getExpenseConstants,
  deleteExpense: deleteExpenseConstants,
};

module.exports = expenseModuleConstants;
