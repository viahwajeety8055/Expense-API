const { error } = require("shared/services");
const models = require("shared/models");
const sharedServices = require("shared/services");
const authModuleConstants = require("../constants");
const { appConfig } = require("shared/constants");
const { app } = require("shared/constants/config.constants");

module.exports = async ({ name, email, password }) => {
  // It will generate password hash
  const hashedPassword = await sharedServices.authServices.getPasswordHash(
    password
  );

  const checkExist = await models.user.read({ email });

  if (checkExist.length)
    error.throw(authModuleConstants.register.errorMessages.ARGE0002);

  // It will create new user
  const data = await models.user.create({
    name: name,
    email: email,
    password: hashedPassword,
  });

  const defaultBudget = {
    budget: 500000,
    redAlert: 150000,
    totalExpense: 0,
    userId: data.insertId,
  };

  await models.budget.create(defaultBudget);

  const subject = "Successfully Registered";
  const message = "Congratulations you have successully registered";

  // Sending email to user
  sharedServices.emailServices({ email, subject, message });

  return {
    userId: data.insertId,
  };
};
