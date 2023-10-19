const sharedServices = require("shared/services");
const sharedValidators = require("shared/validators");
const authModuleConstants = require("../constants");

module.exports = ({ name, email, password }) => {
  if (
    sharedValidators.isRequired(name) &&
    sharedValidators.isRequired(email) &&
    sharedValidators.isRequired(password)
  ) {
    sharedServices.error.throw(
      authModuleConstants.register.errorMessages.ARGE0001
    );
  }

  if (sharedValidators.isValidEmail(email)) {
    sharedServices.error.throw(
      authModuleConstants.register.errorMessages.ARGE0003
    );
  }

  return {
    name,
    email,
    password,
  };
};
