const express = require("express");
const appModules = express.Router();
const authMiddleware = require("shared/middlewares/auth.middlewares");
const authModules = require("./auth_module/routes");
const expenseModules = require("./expense/routes");
const budgetModules = require("./budget/routes");

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

module.exports = appModules;
