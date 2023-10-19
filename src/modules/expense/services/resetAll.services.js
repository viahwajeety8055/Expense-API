const expenseModel = require("shared/models/expense.models");
const sharedServices = require("shared/services");
const expenseConstants = require("../constants");

module.exports = async ({ user_id }) => {
  const isValid = 1;

  const data = await expenseModel.update({ isValid }, { user_id });

  if (data.length == 0) {
    sharedServices.error.throw(expenseConstants.update.errorMessages.EUPE0002);
  }

  return data;
};
