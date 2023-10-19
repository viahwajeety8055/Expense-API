const createService = require("./create.services");
const updateService = require("./udpate.services");
const getService = require("./get.services");

const budgetServicesModule = {
  create: createService,
  update: updateService,
  get: getService,
};

module.exports = budgetServicesModule;
