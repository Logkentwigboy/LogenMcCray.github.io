let daynames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thurday",
  "Friday",
  "Saturday"
];

let months = [
  "January",
  "Feburary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

let d = new Date();
let dayname = daynames[d.getDay()];
let monthname = months[d.getMonth()];
let fulldate = dayname + "," + monthname + "," + d.getDay() + "," +
  d.getFullYear();
document.getElementById("currentdate").textContent = fulldate;