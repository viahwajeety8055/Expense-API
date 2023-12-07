const fs = require("fs");
const { createCanvas } = require("canvas");
const Chart = require("chart.js");
const puppeteer = require("puppeteer");

// Sample data for the chart
const data = {
  labels: ["January", "February", "March", "April", "May"],
  datasets: [
    {
      label: "Sample Data",
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 1,
      data: [65, 59, 80, 81, 56],
    },
  ],
};

// Create a canvas for the chart
const canvas = createCanvas(400, 400);
const ctx = canvas.getContext("2d");

// Create a Chart instance
const chart = new Chart(ctx, {
  type: "bar",
  data: data,
});

// Create a PNG image from the chart
const chartImage = canvas.toBuffer("image/png");

// Use Puppeteer to generate the PDF
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setContent(`
    <html>
      <head>
        <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
      </head>
      <body>
        <canvas id="myChart" width="400" height="400"></canvas>
        <script>
          var ctx = document.getElementById('myChart').getContext('2d');
          new Chart(ctx, ${JSON.stringify(data)});
        </script>
      </body>
    </html>
  `);

  await page.pdf({ path: "chart_puppeteer.pdf", format: "A4" });

  await browser.close();

  console.log("PDF created successfully using Puppeteer.");
})();
