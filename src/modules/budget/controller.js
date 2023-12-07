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
    next(JSON.parse(err));
  }
};
// sns service
budgetControllers.update = async (req, res, next) => {
  try {
    const validatedRequest = validators.updateBudget(req);

    const data = await services.updateBudget({
      budget: validatedRequest.budget,
      budgetLimit: validatedRequest.limit,
      user_id: validatedRequest.userId,
    });

    next({
      result: data,
      ...constants.updateBudget.messages.BUPS0001,
    });
  } catch (err) {
    next(JSON.parse(err));
  }
};

budgetControllers.get = async (req, res, next) => {
  try {
    const data = await services.getBudget();

    next({
      result: data,
      ...constants.getBudget.messages.BGTS0001,
    });
  } catch (err) {
    next(JSON.parse(err));
  }
};

module.exports = budgetControllers;
