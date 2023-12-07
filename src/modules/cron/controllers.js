const services = require("./services");
const constants = require("./constants");
const validators = require("./validators");
const cronControllers = {};

cronControllers.schedule = async (req, res, next) => {
  try {
    const data = await services.schedule();

    next({
      result: data,
      ...constants.schedule.messages.EUPS0001,
    });
  } catch (err) {
    next(JSON.stringify(err.message));
  }
};

module.exports = cronControllers;
