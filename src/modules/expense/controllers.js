const services = require("./services");
const constants = require("./constants");
const validators = require("./validators");
const expenseControllers = {};

expenseControllers.create = async (req, res, next) => {
  try {
    const validatedRequest = validators.create(req);

    const data = await services.create({
      reason: validatedRequest.reason,
      amount: validatedRequest.amount,
      id: validatedRequest.id,
    });

    next({
      result: data,
      ...constants.create.messages.ECRS0001,
    });
  } catch (err) {
    next(JSON.stringify(err.message));
  }
};

expenseControllers.update = async (req, res, next) => {
  try {
    const validatedRequest = validators.update(req);

    const data = await services.update({
      reason: validatedRequest.reason,
      amount: validatedRequest.amount,
      id: validatedRequest.id,
    });

    next({
      result: data,
      ...constants.update.messages.EUPS0001,
    });
  } catch (err) {
    next(JSON.parse(err));
  }
};

expenseControllers.resetAll = async (req, res, next) => {
  try {
    const validatedRequest = validators.resetAll(req);

    const data = await services.resetAll({
      user_id: validatedRequest.user_id,
    });

    next({
      result: data,
      ...constants.resetAll.messages.EDLS0001,
    });
  } catch (err) {
    next(JSON.parse(err));
  }
};

expenseControllers.get = async (req, res, next) => {
  try {
    const validatedRequest = validators.get(req);

    const data = await services.get({
      user_id: validatedRequest.id,
    });

    next({
      result: data,
      ...constants.get.messages.EGTS0001,
    });
  } catch (err) {
    next(JSON.parse(err));
  }
};

module.exports = expenseControllers;
