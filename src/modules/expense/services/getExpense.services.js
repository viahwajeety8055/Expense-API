const expenseModel = require("shared/models/expense.models");

module.exports = async ({ userId }) => {
  const isValid = 1;

  const startDate = "";
  const endDate = "";

  const data = await expenseModel.read({ userId, isValid });

  const result = [];

  for(let i = 1; i <= 30; i++){
    const value = data.find((d) => d.createdAt === )
  }
  `${currentDate.getDate()} ${
    currentDate.getMonth() + 1
  } ${currentDate.getFullYear()}`

  return data;
};
