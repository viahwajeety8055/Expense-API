const currentDate = new Date();
const value = `${currentDate.getFullYear()}-${
  currentDate.getMonth() + 1
}-${currentDate.getDate()}`;

const formattedCurrentDate = currentDate.toISOString().slice(0, 10);

console.log(formattedCurrentDate === value); // This will correctly compare the strings
console.log(formattedCurrentDate); // This will print the formatted date string of currentDate
