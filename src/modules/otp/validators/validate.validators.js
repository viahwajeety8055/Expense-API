const sharedServices = require("shared/services");
const sharedValidators = require("shared/validators");
const otpModuleConstants = require("../constants");

module.exports = ({ otp, phoneNo }) => {
  if (sharedValidators.isRequired(otp)) {
    sharedServices.error.throw(
      otpModuleConstants.validate.errorMessages.OEXE0001
    );
  }

  if (sharedValidators.isRequired(phoneNo)) {
    sharedServices.error.throw(
      otpModuleConstants.validate.errorMessages.OEXE0002
    );
  }

  return {
    otp,
    phoneNo,
  };
};
