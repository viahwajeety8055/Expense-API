const expenseModel = require("shared/models/expense.models");
const { dateServices } = require("shared/services");

module.exports = async ({ userId, key }) => {
  const isValid = 1;

  const currentAndPreviousMonthDate =
    dateServices.getCurrentAndPreviousMonthDates();

  let startDate = new Date(currentAndPreviousMonthDate.previousMonthDate);
  const endDate = new Date(currentAndPreviousMonthDate.currentMonthDate);

  const expenseWhereParam = {};
  expenseWhereParam.isValid = 1;
  expenseWhereParam.userId = userId;

  if (key) {
    expenseWhereParam.startDate = startDate;
    expenseWhereParam.endDate = endDate;
  }

  const data = await expenseModel.read({ userId, isValid, startDate, endDate });

  const result = [];

  if (key) {
    while (startDate <= endDate) {
      const value = data.filter((d) =>
        dateServices.compareDate(startDate, d.createdAt)
      );
      result.push({
        date: new Date(startDate), // Create a new date object to avoid reference sharing
        amount:
          value.map((a) => a.amount).reduce((accum, curr) => accum + curr, 0) ||
          0,
      });
      startDate.setDate(startDate.getDate() + 1); // Increment startDate by one day
    }
  }

  return key ? { result } : { data };
};
