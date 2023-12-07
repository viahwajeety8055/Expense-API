const { error } = require("shared/services");
const sharedValidators = require("shared/validators");
const authModuleConstants = require("../constants");
const sharedServices = require("shared/services");

module.exports = (req) => {
  const { name, email, password } = req.body;

  if (sharedValidators.isRequired(name)) {
    sharedServices.error.throw(
      authModuleConstants.register.errorMessages.ARGE0001
    );
  }

  if (sharedValidators.isRequired(email)) {
    error.throw(authModuleConstants.register.errorMessages.ARGE0004);
  }

  if (sharedValidators.isRequired(password)) {
    error.throw(authModuleConstants.register.errorMessages.ARGE0005);
  }

  if (!sharedValidators.isValidEmail(email)) {
    error.throw(authModuleConstants.register.errorMessages.ARGE0003);
  }

  return {
    name,
    email,
    password,
  };
};
