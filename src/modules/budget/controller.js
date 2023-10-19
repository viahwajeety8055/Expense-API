const services = require("./services");
const constants = require("./constants");
const validators = require("./validators");
const budgetControllers = {};

budgetControllers.create = async (req, res, next) => {
  try {
    const validatedRequest = validators.create(req);

    const data = await services.create({
      budget: validatedRequest.budget,
      limit: validatedRequest.limit,
      id: validatedRequest.id,
    });

    next({
      result: data,
      ...constants.create.messages.BCRS0001,
    });
  } catch (err) {
    next(JSON.parse(err));
  }
};
// sns service
budgetControllers.update = async (req, res, next) => {
  try {
    const validatedRequest = validators.update(req);

    const data = await services.update({
      budget: validatedRequest.budget,
      budget_limit: validatedRequest.budget_limit,
      user_id: validatedRequest.user_id,
    });

    next({
      result: data,
      ...constants.update.messages.BUPS0001,
    });
  } catch (err) {
    next(JSON.parse(err));
  }
};

budgetControllers.get = async (req, res, next) => {
  try {
    const data = await services.get();

    next({
      result: data,
      ...constants.get.messages.BGTS0001,
    });
  } catch (err) {
    next(JSON.parse(err));
  }
};

module.exports = budgetControllers;
