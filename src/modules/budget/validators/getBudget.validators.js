const sharedValidators = require("shared/validators");
const expenseConstants = require("../constants");
const { error } = require("shared/services");

module.exports = (req) => {
  const { userId } = req.params;

  return {
    userId: userId,
  };
};
