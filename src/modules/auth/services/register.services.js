const { error } = require("shared/services");
const models = require("shared/models");
const sharedServices = require("shared/services");
const authModuleConstants = require("../constants");

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

  return {
    userId: data.insertId,
  };
};
