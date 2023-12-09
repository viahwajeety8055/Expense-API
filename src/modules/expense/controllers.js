const expenseServices = require("./services");
const expenseConstants = require("./constants");
const expenseValidators = require("./validators");
const expenseControllers = {};

expenseControllers.createExpense = async (req, res, next) => {
  try {
    const validatedRequest = expenseValidators.createExpense(req);

    const data = await expenseServices.createExpense({
      reason: validatedRequest.reason,
      amount: validatedRequest.amount,
      userId: validatedRequest.userId,
    });

    next({
      result: data,
      ...expenseConstants.createExpense.messages.ECRS0001,
    });
  } catch (err) {
    next(JSON.parse(err.message));
  }
};

expenseControllers.updateExpense = async (req, res, next) => {
  try {
    const validatedRequest = expenseValidators.updateExpense(req);

    const data = await expenseServices.updateExpense({
      reason: validatedRequest.reason,
      amount: validatedRequest.amount,
      expenseId: validatedRequest.expenseId,
    });

    next({
      result: data,
      ...expenseConstants.updateExpense.messages.EUPS0001,
    });
  } catch (err) {
    next(JSON.parse(err));
  }
};

expenseControllers.resetAllExpense = async (req, res, next) => {
  try {
    const validatedRequest = expenseValidators.resetAllExpense(req);

    const data = await expenseServices.resetAllExpense({
      user_id: validatedRequest.userId,
    });

    next({
      result: data,
      ...expenseConstants.resetAllExpense.messages.EDLS0001,
    });
  } catch (err) {
    next(JSON.parse(err));
  }
};

expenseControllers.getExpense = async (req, res, next) => {
  try {
    const validatedRequest = expenseValidators.getExpense(req);

    const data = await expenseServices.getExpense({
      userId: validatedRequest.userId,
      key: validatedRequest.key,
    });

    next({
      result: data,
      ...expenseConstants.getExpense.messages.EGTS0001,
    });
  } catch (err) {
    next(JSON.parse(err));
  }
};

expenseControllers.deleteExpense = async (req, res, next) => {
  try {
    const validatedRequest = expenseValidators.deleteExpense(req);

    const data = await expenseServices.deleteExpense({
      expenseId: validatedRequest.expenseId,
      userId: validatedRequest.userId,
    });

    next({
      result: data,
      ...expenseConstants.deleteExpense.messages.EDES0001,
    });
  } catch (err) {
    next(JSON.parse(err));
  }
};

module.exports = expenseControllers;
