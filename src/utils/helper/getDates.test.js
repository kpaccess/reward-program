import { getMonth, getYear } from "./getDates";

describe("getMonth", () => {
  it("gets dates and returns month", () => {
    expect(getMonth("2024-07-08")).toBe("July");
  });
});

describe("getYear", () => {
  it("gets dates and returns year", () => {
    expect(getYear("2024-07-08")).toBe(2024);
  });
});
