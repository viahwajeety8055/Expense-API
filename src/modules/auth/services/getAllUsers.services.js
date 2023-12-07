const models = require("../../../shared/models");
const sharedServices = require("../../../shared/services");
const authModuleConstants = require("../constants");

module.exports = async () => {
  const users = await models.user.read({});

  const usersInformation = users.map((user) => {
    return {
      userId: user.userId,
      email: user.email,
    };
  });

  return usersInformation;
};
