const models = require("shared/models/otp.models");
const sharedServices = require("shared/services");
const otpConstants = require("../constants");

module.exports = async ({ otp, phoneNo }) => {
  const data = await models.read({ otp, phoneNo });

  if (data.length > 0) {
    const storedDate = data[0].created_at;
    const currentDate = new Date();

    // Calculate the time difference in milliseconds
    const timeDifference = currentDate - storedDate;

    // Calculate the allowed time limit for OTP validation (3 minutes or 180,000 milliseconds)
    const allowedTimeLimit = 180000;

    if (timeDifference <= allowedTimeLimit) {
      return { message: "Successfully registered" };
    } else {
      sharedServices.error.throw(otpConstants.validate.errorMessages.OEXE0001);
    }
  } else {
    sharedServices.error.throw(otpConstants.validate.errorMessages.OEXE0002);
  }
};
