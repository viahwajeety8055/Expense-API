const express = require("express");
const expenseModuleRouter = express.Router();

const expenseControllers = require("./controllers");

// route_name: /
// route_path: expense/
// route_description:
//      route used to create expense
expenseModuleRouter.post("/", expenseControllers.createExpense);

// route_name: /
// route_path: expense/
// route_description:
//      route used to get expense
expenseModuleRouter.get("/", expenseControllers.getExpense);

// route_name: /
// route_path: expense/
// route_description:
//      route used to update expense
expenseModuleRouter.patch("/", expenseControllers.updateExpense);

// route_name: /
// route_path: expense/:expenseId
// route_description:
//      route used to delete expense
expenseModuleRouter.patch("/:expenseId", expenseControllers.deleteExpense);

// route_name: resetAll
// route_path: expense/resetAll
// route_description:
//      route used to resetAll expense
expenseModuleRouter.put("/", expenseControllers.resetAllExpense);

module.exports = expenseModuleRouter;
