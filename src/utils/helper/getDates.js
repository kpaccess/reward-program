const monthNames = [
  "",
  "Jan",
  "Feb",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

export const getMonth = (date) => {
  const d = new Date(date);
  const month = d.getMonth();
  return monthNames[month + 1];
};

export function getYear(date) {
  const d = new Date(date);
  const year = d.getFullYear();
  return year;
}
