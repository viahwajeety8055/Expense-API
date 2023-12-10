const models = require("../../../shared/models");
const sharedServices = require("../../../shared/services");
const authModuleConstants = require("../constants");

module.exports = async ({ id }) => {
  let users;
  const userWhereParam = {};

  if (id) {
    userWhereParam.id = id;
  }
  users = await models.user.read(userWhereParam);

  let usersInformation;
  if (users.length) {
    usersInformation = users.map((user) => {
      return {
        userId: user.userId,
        name: user.name,
        email: user.email,
      };
    });
  }

  return usersInformation;
};
