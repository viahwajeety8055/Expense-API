const express = require("express");
const authModuleRouter = express.Router();

const authControllers = require("./controllers");

// route_name: login
// route_path: /auth/login
// route_description:
//      route used to login module
authModuleRouter.post("/login", authControllers.login);

// route_name: register
// route_path: /auth/register
// route_description:
//      route used to register module
authModuleRouter.post("/register", authControllers.register);

// route_name: users
// route_path: /auth/users
// route_description:
//      route used to test users module
authModuleRouter.get("/users", authControllers.getAllUser);

module.exports = authModuleRouter;
