import { nanoid } from "nanoid";

/**
 * Extracts unique months from transaction data for the year 2024
 * @param {Array} data - An array of customer objects, each containing transactions array.
 * @returns {Array} An array of unique month numbers (1-12) sorted in ascending order.
 */
export const getUniqueMonths = (data) => {
  const months = new Set();
  data.forEach((customer) => {
    customer.transactions.forEach((transaction) => {
      const date = new Date(transaction.date);
      if (date.getFullYear() === 2024) {
        months.add(date.getMonth() + 1);
      }
    });
  });
  return [...months].sort((a, b) => a - b);
};

/**
 * Finds three consecutive months from a sorted array of month numbers
 * @param {Array<number>} months - Any array of month numbers(1-12) sorted in ascending order
 * @returns {Array<number>} An array of three consecutive month numbers, or an empty array if no consecutive months are found.
 */

// find three consecutive months from the sorted months
export const findConsecutiveMonths = (months) => {
  //it iterates through the array of months and stops two elements before the end
  // as we looking for 3 consecutive months

  for (let i = 0; i < months.length - 2; i++) {
    // months[i + 1] === months[i] checks if the next month is exactly one more then the current month
    // months[i + 2] === months[i] + 2 checks if the month after that is exactly two more then the current month
    if (months[i + 1] === months[i] + 1 && months[i + 2] === months[i] + 2) {
      return [months[i], months[i + 1], months[i + 2]];
    }
  }

  return [];
};

/**
 * Filters customer transactions based on consecutive months and a specific year
 *
 * @param {Array} data - An array of customer objects, each containing a transactions array.
 * @param {Array<number>} consecutiveMonths - An array of three consecutive month numbers.
 * @param {number} year - The year to filter transactions by.
 * @returns {Array} A new array of customer objects with filtered transactions.
 */

export const filterTransactionByConsecutiveMonths = (
  data,
  consecutiveMonths,
  year
) => {
  return data.map((customer) => {
    const filteredTransaction = customer.transactions
      .filter((transaction) => {
        const transactionDate = new Date(transaction.date);
        const transactionMonth = transactionDate.getMonth() + 1;
        const transactionYear = transactionDate.getFullYear();

        return (
          consecutiveMonths.includes(transactionMonth) &&
          year === transactionYear
        );
      })
      .map((transaction) => ({
        ...transaction,
        transactionId: nanoid(10),
      }));

    return {
      ...customer,
      customerId: nanoid(10),
      transactions: filteredTransaction,
    };
  });
};
