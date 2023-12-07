const express = require("express");
const cronModuleRouter = express.Router();

const cronControllers = require("./controllers");

// route_name: schedule
// route_path: /cron/schedule
// route_description:
//      route used to test schedule module
cronModuleRouter.post("/schedule", cronControllers.schedule);

module.exports = cronModuleRouter;
