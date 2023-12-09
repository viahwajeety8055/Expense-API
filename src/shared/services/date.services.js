const dateServices = {};

// @service-name: getFormattedCurrentDateTime
// @service-description: get formated current date time
dateServices.getFormattedCurrentDateTime = () => {
  const currentDateTime = new Date();

  const year = currentDateTime.getFullYear();
  const month = String(currentDateTime.getMonth() + 1).padStart(2, "0");
  const day = String(currentDateTime.getDate()).padStart(2, "0");

  const hours = String(currentDateTime.getHours()).padStart(2, "0");
  const minutes = String(currentDateTime.getMinutes()).padStart(2, "0");
  const seconds = String(currentDateTime.getSeconds()).padStart(2, "0");

  const formattedDateTime = `${day}${month}${year}-${hours}${minutes}${seconds}`;

  return formattedDateTime;
};

// @service-name: getCurrentISTDateTime
// @service-description: get current date time in IST
dateServices.getCurrentISTDateTime = () => {
  let currentDateTime = new Date();

  // Add 5.30 hrs to datetime to convert to IST
  currentDateTime.setHours(
    currentDateTime.getHours() + 5,
    currentDateTime.getMinutes() + 30
  );

  return currentDateTime;
};

// @service-name: getFutureDateTime
// @service-description: get future date time in IST based on
//    offsettime (in minutes)
dateServices.getFutureDateTime = (offsetTime) => {
  const currentTimeStamp = new Date().setMinutes(
    new Date().getMinutes() + offsetTime
  );
  let currentDateTime = new Date(currentTimeStamp);

  // Add 5.30 hrs to datetime to convert to IST
  currentDateTime.setHours(
    currentDateTime.getHours() + 5,
    currentDateTime.getMinutes() + 30
  );

  currentDateTime = currentDateTime.toISOString();
  currentDateTime = currentDateTime.split(".")[0];
  currentDateTime = currentDateTime.replaceAll("T", " ");

  return currentDateTime;
};

// @service-name: getCurrentAndPreviousMonthDates
// @service-description: get current and previous month date
dateServices.getCurrentAndPreviousMonthDates = () => {
  const currentDate = new Date();
  const currentDay = currentDate.getDate(); // Get the day of the current date
  const currentMonth = currentDate.getMonth(); // Get the month of the current date (0-indexed)
  const currentYear = currentDate.getFullYear(); // Get the year of the current date

  let prevMonthDay = currentDay;
  let prevMonth = currentMonth - 1;
  let prevYear = currentYear;

  if (prevMonth === -1) {
    prevMonth = 11; // December
    prevYear--;
  }

  // Format the current month's date (today's date)
  const formattedCurrentDate = `${currentYear}-${(currentMonth + 1)
    .toString()
    .padStart(2, "0")}-${currentDay.toString().padStart(2, "0")}`;

  // Format the previous month's date with the same day
  const formattedPreviousMonthDate = `${prevYear}-${(prevMonth + 1)
    .toString()
    .padStart(2, "0")}-${prevMonthDay.toString().padStart(2, "0")}`;

  return {
    currentMonthDate: formattedCurrentDate,
    previousMonthDate: formattedPreviousMonthDate,
  };
};

dateServices.compareDate = (previousDate, customerDate) => {
  const formattedData = new Date(customerDate);
  if (
    formattedData.getFullYear() === previousDate.getFullYear() &&
    formattedData.getMonth() === previousDate.getMonth() &&
    formattedData.getDate() === previousDate.getDate()
  ) {
    return true;
  }
  return false;
};

module.exports = dateServices;
