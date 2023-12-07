const createExpenseValidators = require("./createExpense.validators");
const updateExpenseValidators = require("./updateExpense.validators");
const resetAllExpenseValidators = require("./resetAllExpense.validators");
const getExpenseValidators = require("./getExpense.validators");
const deleteExpenseValidators = require("./deleteExpense.validators");

const expenseModuleValidators = {
  createExpense: createExpenseValidators,
  updateExpense: updateExpenseValidators,
  resetAllExpense: resetAllExpenseValidators,
  getExpense: getExpenseValidators,
  deleteExpense: deleteExpenseValidators,
};

module.exports = expenseModuleValidators;
