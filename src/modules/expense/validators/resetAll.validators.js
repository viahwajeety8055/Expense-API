const sharedServices = require("shared/services");
const sharedValidators = require("shared/validators");
const expenseModuleConstants = require("../constants");

module.exports = (req) => {
  return {
    user_id: req.user_id,
  };
};
