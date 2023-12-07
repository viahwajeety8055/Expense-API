const express = require("express");
const otpModuleRoutes = express.Router();

const otpModuleControllers = require("app_modules/otp/controllers");

// route_name: generate
// route_path: /otp/generate
// route_description:
//      route used to test generate module
otpModuleRoutes.post("/generate", otpModuleControllers.generate);

// route_name: validate
// route_path: /otp/validate
// route_description:
//      route used to test validate module
otpModuleRoutes.get("/validate", otpModuleControllers.validate);

module.exports = otpModuleRoutes;
