const sharedServices = require("shared/services");
const sharedValidators = require("shared/validators");
const expensModuleConstants = require("../constants");
const expenseModuleConstants = require("../constants");

module.exports = (req) => {
  const { key } = req.query;
  const { user_id } = req;

  return {
    userId: user_id,
    key,
  };
};
