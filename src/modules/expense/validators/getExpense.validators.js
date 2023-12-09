const sharedServices = require("shared/services");
const sharedValidators = require("shared/validators");
const expensModuleConstants = require("../constants");
const expenseModuleConstants = require("../constants");

module.exports = (req) => {
  const { id } = req.params;
  const { key } = req.query;

  return {
    userId: id,
    key,
  };
};
