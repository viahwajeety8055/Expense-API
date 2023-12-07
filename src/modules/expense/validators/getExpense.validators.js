const sharedServices = require("shared/services");
const sharedValidators = require("shared/validators");
const expensModuleConstants = require("../constants");
const expenseModuleConstants = require("../constants");

module.exports = (req) => {
  return {
    userId: req.user_id,
  };
};
