/**
 * Array of month names
 * @type {string[]}
 */

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

/**
 * Get the month name for a date string.
 * @params {string} date - The date string to extract the month from.
 * @returns {string} The name of the month
 */

export const getMonth = (date) => {
  const d = new Date(date);
  const month = d.getMonth();
  return monthNames[month + 1];
};

/**
 * Get the year from a date string.
 * @param {string} date - The date string to extract the year from
 * @returns {number} The year
 */

export function getYear(date) {
  const d = new Date(date);
  const year = d.getFullYear();
  return year;
}
