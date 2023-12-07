const sharedServices = require("shared/services");
const sharedValidators = require("shared/validators");
const authModuleConstants = require("../constants");

module.exports = (req) => {
  const { email, password } = req.body;

  if (sharedValidators.isRequired(email)) {
    sharedServices.error.throw(
      authModuleConstants.login.errorMessages.ALNE0001
    );
  }

  if (!sharedValidators.isValidEmail(email)) {
    sharedServices.error.throw(
      authModuleConstants.login.errorMessages.ALNE0005
    );
  }

  if (sharedValidators.isRequired(password)) {
    sharedServices.error.throw(
      authModuleConstants.login.errorMessages.ALNE0004
    );
  }

  return {
    email,
    password,
  };
};
