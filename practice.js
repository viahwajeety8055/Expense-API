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

console.log("Current month date:", formattedCurrentDate);
console.log("Previous month date:", formattedPreviousMonthDate);

console.log(formattedCurrentDate === currentDate);
