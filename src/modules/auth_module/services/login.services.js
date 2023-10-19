const models = require("../../../shared/models");
const sharedServices = require("../../../shared/services");
const authModuleConstants = require("../constants");

module.exports = async ({ username, password }) => {
  const data = await models.user.read({
    email: username,
  });

  // If user not exist with given email throw exception
  if (data.length == 0) {
    sharedServices.error.throw(
      authModuleConstants.login.errorMessages.ALNE0002
    );
  }

  //Compare password
  const db_password = await sharedServices.authServices.comparePassword(
    password,
    data[0].password
  );

  // If password not matched throw exception
  if (!db_password) {
    sharedServices.error.throw(
      authModuleConstants.login.errorMessages.ALNE0003
    );
  }

  //Generating JWT token
  const secretKey = "secret";

  const payload = {
    id: data[0].userId,
  };

  const options = {
    expiresIn: "24h",
  };

  const token = sharedServices.authServices.getJWT(payload, secretKey, options);

  // Returning final response
  return token;
};
