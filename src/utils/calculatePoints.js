export const calculatePoints = (amount) => {
  const roundedAmount = Math.round(amount);

  if (roundedAmount <= 50) return 0;

  // If the amount is over 100, points are calculated as 2*(amount - 100) + 50.
  return roundedAmount <= 100
    ? roundedAmount - 50
    : (roundedAmount - 100) * 2 + 50;
};

export const totalPoint = (customer) => {
  return customer.transactions.reduce(
    (sum, transaction) => sum + calculatePoints(transaction.amount),
    0
  );
};
