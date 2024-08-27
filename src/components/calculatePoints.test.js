import { calculatePoints } from "./calculatePoints";

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
