const sharedServices = require("shared/services");
const sharedValidators = require("shared/validators");
const otpModuleConstants = require("../constants");

module.exports = ({ phoneNo }) => {
  if (sharedValidators.isRequired(phoneNo)) {
    sharedServices.error.throw(
      otpModuleConstants.generate.errorMessages.OGNE0001
    );
  }

  if (!sharedValidators.isvalidMobileNumber(phoneNo)) {
    sharedServices.error.throw(
      otpModuleConstants.generate.errorMessages.OGNE0002
    );
  }

  return {
    phoneNo,
  };
};
