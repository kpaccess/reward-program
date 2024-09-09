/**
 *
 * Calculate reward points based on the transaction amount.
 * @param {number} amount = The transaction amount.
 * @returns {number} The calculated reward points.
 */

export const calculatePoints = (amount) => {
  const roundedAmount = Math.floor(amount);

  if (roundedAmount <= 50) return 0;

  // If the amount is over 100, points are calculated as 2*(amount - 100) + 50.
  return roundedAmount <= 100
    ? roundedAmount - 50
    : (roundedAmount - 100) * 2 + 50;
};

/**
 * Calculate the total reward points for a customer based on their transactions.
 * @param {Object} customer - The customer object containing transactions.
 * @param { Array } customer.transactions - An array of transaction objects.
 * @param {number} customer.transactions[].amount - The amount of each transaction.
 * @returns {number} The total reward points for the customer
 */

export const totalPoint = (customer) => {
  return customer.transactions.reduce(
    (sum, transaction) => sum + calculatePoints(transaction.amount),
    0
  );
};
