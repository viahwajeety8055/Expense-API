const createService = require("./create.services");
const updateService = require("./update.services");
const resetAllService = require("./resetAll.services");
const getService = require("./get.services");

const expenseServicesModule = {
  create: createService,
  update: updateService,
  resetAll: resetAllService,
  get: getService,
};

module.exports = expenseServicesModule;
