const services = require("./services");
const constants = require("./constants");
const validators = require("./validators");
const authControllers = {};

authControllers.register = async (req, res, next) => {
  try {
    const validatedRequest = req.body;

    const data = await services.register({
      name: validatedRequest.name,
      email: validatedRequest.email,
      password: validatedRequest.password,
    });

    next({
      result: data,
      ...constants.register.messages.ARGS0001,
    });
  } catch (err) {
    next(JSON.parse(err.message));
  }
};

authControllers.login = async (req, res, next) => {
  try {
    const validatedRequest = req.body;

    const data = await services.login({
      username: validatedRequest.username,
      password: validatedRequest.password,
    });

    next({
      result: data,
      ...constants.login.messages.ALNS0001,
    });
  } catch (err) {
    next(JSON.parse(err.message));
  }
};

module.exports = authControllers;
