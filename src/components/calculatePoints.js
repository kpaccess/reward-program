export const calculatePoints = (amount) => {
  if (amount <= 50) return 0;

  let points = 0;

  // Points for spending between $50 and $100
  if (amount > 50 && amount <= 100) {
    points += amount - 50;
  }

  //points for spending over $100
  if (amount > 100) {
    points += (amount - 100) * 2;
    points += 50;
  }
  return points;
};
