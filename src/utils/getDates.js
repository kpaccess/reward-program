const monthNames = [
  "January",
  "February",
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
];

export const getMonth = (date) => {
  const d = new Date(date);
  const month = d.getMonth() + 1;
  return monthNames[month];
};

export function getYear(date) {
  const d = new Date(date);
  const year = d.getFullYear();
  return year;
}
