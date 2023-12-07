const ChartJSImage = require("chart.js-image");
const sharedModels = require("shared/models");
const { dateServices } = require("shared/services");

module.exports = async () => {
  const currentDate = dateServices.getCurrentISTDateTime();

  const expenses = await sharedModels.expense.read({ userId, currentDate });

  const budget = await sharedModels.budget.read({ userId });

  // It will store amount & date
  const amounts = expenses.map((expense) => {
    return {
      date: expense.createdAt,
      amount: expense.amount,
    };
  });

  chartGenerator();
};

chartGenerator = () => {
  const currentDate = new Date();
  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();

  const labels = Array.from(
    { length: daysInMonth },
    (_, index) => index + 1
  ).map((day) => {
    return `${currentDate.toLocaleDateString("en-US", {
      month: "short",
    })} ${day}`;
  });

  const bar_chart = ChartJSImage()
    .chart({
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: "My First dataset",
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
            data: Array.from({ length: daysInMonth }, () =>
              Math.floor(Math.random() * 100)
            ),
          },
          {
            label: "My Second dataset",
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
            data: Array.from({ length: daysInMonth }, () =>
              Math.floor(Math.random() * 10)
            ),
          },
          // Add more datasets if needed
        ],
      },
      options: {
        title: {
          display: true,
          text: `Daily Expenses in ${currentDate.toLocaleDateString("en-US", {
            month: "long",
          })}`,
        },
        scales: {
          xAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: `Days of ${currentDate.toLocaleDateString(
                  "en-US",
                  { month: "long" }
                )}`,
              },
            },
          ],
          yAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: "Amount of Fees",
              },
            },
          ],
        },
      },
    })
    .backgroundColor("white")
    .width(700)
    .height(390);

  // Save the chart as an image file
  bar_chart.toFile(
    "C:/Users/lenovo/Desktop/All NodeJS Programs/Expense-API/chart.png"
  );
};
