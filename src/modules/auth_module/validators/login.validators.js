const sharedServices = require("shared/services");
const sharedValidators = require("shared/validators");
const authModuleConstants = require("../constants");

module.exports = ({ username, password }) => {
  if (
    sharedValidators.isRequired(username) &&
    sharedValidators.isRequired(password)
  ) {
    sharedServices.error.throw(
      authModuleConstants.login.errorMessages.ALNE0001
    );
  }

  return {
    username,
    password,
  };
};
