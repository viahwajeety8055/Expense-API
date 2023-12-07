const express = require("express");
const appModules = express.Router();
const { authMiddleware } = require("shared/middlewares");
const authModules = require("./auth/routes");
const expenseModules = require("./expense/routes");
const budgetModules = require("./budget/routes");
const cronModules = require("./cron/routes");

// module_name: auth
// module_route: /auth
// module_description:
//      handles routes related to auth module
appModules.use("/auth", authModules);

// module_name: expense
// module_route: /expense
// module_description:
//      handles routes related to expense module
appModules.use("/expense", authMiddleware, expenseModules);

// module_name: budget
// module_route: /budget
// module_description:
//      handles routes related to budget module
appModules.use("/budget", authMiddleware, budgetModules);

// module_name: cron
// module_route: /cron
// module_description:
//      handles routes related to cron module
appModules.use("/cron", cronModules);

module.exports = appModules;
