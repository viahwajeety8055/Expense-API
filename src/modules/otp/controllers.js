const otpValidators = require("./validators");
const otpServices = require("./services");
const otpConstants = require("./constants");

const otpModuleControllers = {};

// controller_name: generate
// controller_description:
//      controller used to test generate module controller file
otpModuleControllers.generate = async (req, res, next) => {
  try {
    const validatedRequest = otpValidators.generate(req.body);

    // handle logic within service function
    const data = await otpServices.generate({
      phoneNo: validatedRequest.phoneNo,
    });

    // return response
    next({
      result: data,
      ...otpConstants.generate.messages.OGNS0001,
    });
  } catch (error) {
    next(JSON.parse(error.message));
  }
};

// controller_name: validate
// controller_description:
//      controller used to test validate module controller file
otpModuleControllers.validate = async (req, res, next) => {
  try {
    const validatedRequest = otpValidators.validate(req.body);

    // handle logic within service function
    const data = await otpServices.validate({
      otp: validatedRequest.otp,
      phoneNo: validatedRequest.phoneNo,
    });

    next({
      result: data,
      ...otpConstants.validate.messages.OEXS0001,
    });
  } catch (error) {
    next(JSON.parse(error.message));
  }
};

module.exports = otpModuleControllers;
