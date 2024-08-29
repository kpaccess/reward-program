export const calculatePoints = (amount) => {
  const roundedAmount = Math.round(amount);

  if (roundedAmount <= 50) return 0;

  let points = 0;

  // Points for spending between $50 and $100
  if (roundedAmount > 50 && roundedAmount <= 100) {
    points = roundedAmount - 50;
  }

  //points for spending over $100
  if (roundedAmount > 100) {
    points += (roundedAmount - 100) * 2;
    points += 50;
  }
  return points;
};

export const totalPoint = (customer) => {
  return customer.transactions.reduce(
    (sum, transaction) => sum + calculatePoints(transaction.amount),
    0
  );
};
