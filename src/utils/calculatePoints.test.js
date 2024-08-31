import { calculatePoints, totalPoint } from "./calculatePoints";

describe("calculatePoints", () => {
  it("should return 0 points for transactions below $50", () => {
    expect(calculatePoints(30)).toBe(0);
  });

  it("should return correct points for transactions between $50 and $100", () => {
    expect(calculatePoints(70)).toBe(20);
  });
  it("should return correct points for transactions above $100", () => {
    expect(calculatePoints(120)).toBe(90);
  });
});

describe("totalPoint", () => {
  it("should calculate total points correctly for a customer with multiple transactions", () => {
    const customer = {
      transactions: [{ amount: 120 }, { amount: 80 }, { amount: 30 }],
    };

    expect(totalPoint(customer)).toBe(120);
  });
});
