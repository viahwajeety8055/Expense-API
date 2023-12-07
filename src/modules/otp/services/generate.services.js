const models = require("shared/models/otp.models");

module.exports = async ({ phoneNo }) => {
  const otp = Math.floor(1000 + Math.random() * 9000);

  await models.create({ otp, phoneNo });

  return { otp };
};
