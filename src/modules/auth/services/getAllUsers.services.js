const models = require("../../../shared/models");
const sharedServices = require("../../../shared/services");
const authModuleConstants = require("../constants");

module.exports = async ({ id }) => {
  let users;
  if (id) {
    users = await models.user.read({ id });
  }

  const usersInformation = users.map((user) => {
    return {
      userId: user.userId,
      email: user.email,
    };
  });

  return usersInformation;
};
