import { getMonth, getYear } from "./getDates";

describe("getMonth", () => {
  it("it gets date and return month", () => {
    expect(getMonth("2024-07-01")).toBe("July");
  });
});
describe("getYear", () => {
  it("it gets date and return year", () => {
    expect(getYear("2024-07-01")).toBe(2024);
  });
});
