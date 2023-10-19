const expenseModel = require("shared/models/expense.models");
const sharedServices = require("shared/services");
const expenseConstants = require("../constants");

module.exports = async ({ reason, amount, id }) => {
  const data = await expenseModel.update({ reason, amount }, { id });

  if (data.length == 0) {
    sharedServices.error.throw(expenseConstants.update.errorMessages.EUPE0002);
  }

  return data;
};
