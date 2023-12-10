const express = require("express");
const budgetModuleRouter = express.Router();

const budgetControllers = require("./controller");

// route_name: create
// route_path: /budget/create
// route_description:
//      route used to test create module
budgetModuleRouter.post("/create", budgetControllers.create);

// route_name: update
// route_path: /budget/update
// route_description:
//      route used to test update module
budgetModuleRouter.patch("/update", budgetControllers.update);

// route_name: get
// route_path: /budget/get
// route_description:
//      route used to test get module
budgetModuleRouter.get("/get/:userId", budgetControllers.get);

module.exports = budgetModuleRouter;
