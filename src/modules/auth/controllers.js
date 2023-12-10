const authServices = require("./services");
const authConstants = require("./constants");
const authValidators = require("./validators");
const authControllers = {};

authControllers.register = async (req, res, next) => {
  try {
    const validatedRequest = authValidators.register(req);

    const data = await authServices.register({
      name: validatedRequest.name,
      email: validatedRequest.email,
      password: validatedRequest.password,
    });

    next({
      result: data,
      ...authConstants.register.messages.ARGS0001,
    });
  } catch (err) {
    next(JSON.parse(err.message));
  }
};

authControllers.login = async (req, res, next) => {
  try {
    const validatedRequest = authValidators.login(req);

    const data = await authServices.login({
      email: validatedRequest.email,
      password: validatedRequest.password,
    });

    next({
      result: data,
      ...authConstants.login.messages.ALNS0001,
    });
  } catch (err) {
    next(JSON.parse(err.message));
  }
};

authControllers.getAllUser = async (req, res, next) => {
  try {
    const data = await authServices.getAllUser({ id: req.params.id });

    next({
      result: data,
      ...authConstants.getAllUser.messages.AGUS0001,
    });
  } catch (err) {
    next(JSON.parse(err.message));
  }
};

module.exports = authControllers;
