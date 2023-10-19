const express = require("express");
const expenseModuleRouter = express.Router();

const expenseControllers = require("./controllers");

// route_name: create
// route_path: /expense/create
// route_description:
//      route used to test create module
expenseModuleRouter.post("/create", expenseControllers.create);

// route_name: get
// route_path: /expense/get
// route_description:
//      route used to test get module
expenseModuleRouter.get("/get", expenseControllers.get);

// route_name: update
// route_path: /expense/update
// route_description:
//      route used to test update module
expenseModuleRouter.put("/update", expenseControllers.update);

// route_name: delete
// route_path: /expense/delete
// route_description:
//      route used to test delete module
expenseModuleRouter.put("/resetAll", expenseControllers.resetAll);

module.exports = expenseModuleRouter;
