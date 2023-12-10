const services = require("./services");
const constants = require("./constants");
const validators = require("./validators");
const budgetControllers = {};

budgetControllers.create = async (req, res, next) => {
  try {
    const validatedRequest = validators.createBudget(req);

    const data = await services.createBudget({
      budget: validatedRequest.budget,
      limit: validatedRequest.limit,
      userId: validatedRequest.userId,
    });

    next({
      result: data,
      ...constants.createBudget.messages.BCRS0001,
    });
  } catch (err) {
    next(JSON.parse(err.message));
  }
};
// sns service
budgetControllers.update = async (req, res, next) => {
  try {
    const validatedRequest = validators.updateBudget(req);

    const data = await services.updateBudget({
      budget: validatedRequest.budget,
      redAlert: validatedRequest.redAlert,
      userId: validatedRequest.userId,
    });

    next({
      result: data,
      ...constants.updateBudget.messages.BUPS0001,
    });
  } catch (err) {
    next(JSON.parse(err.message));
  }
};

budgetControllers.get = async (req, res, next) => {
  try {
    const validatedRequest = validators.getBudget(req);

    const data = await services.getBudget({ userId: validatedRequest.userId });

    next({
      result: data,
      ...constants.getBudget.messages.BGTS0001,
    });
  } catch (err) {
    next(JSON.parse(err.message));
  }
};

module.exports = budgetControllers;
