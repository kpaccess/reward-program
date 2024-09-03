import { render, screen } from "@testing-library/react";
import MonthlyTransactions from "./MonthlyTransactions";
import { transactions } from "../data/data";
import { calculatePoints, totalPoint } from "../utils/calculatePoints";

vi.mock("../utils/calculatePoints", () => ({
  calculatePoints: vi.fn((amount) => amount),
  totalPoint: vi.fn(() => 100),
}));

describe(" Monthly Transactions", () => {
  it("renders correctily with provided data", () => {
    render(<MonthlyTransactions data={transactions} />);

    expect(
      screen.getByText(
        "Monthwise Transactions for each customer and total rewards"
      )
    ).toBeInTheDocument();
    expect(screen.queryByText(/John Doe/i)).toBeInTheDocument();

    expect(
      screen.getAllByRole("columnheader", { name: /year/i })[0]
    ).toBeInTheDocument();
    expect(
      screen.getAllByRole("columnheader", { name: /month/i })[0]
    ).toBeInTheDocument();
    expect(
      screen.getAllByRole("columnheader", { name: /Transaction Id/i })[0]
    ).toBeInTheDocument();
    expect(
      screen.getAllByRole("columnheader", { name: /Amount/i })[0]
    ).toBeInTheDocument();
    expect(
      screen.getAllByRole("columnheader", { name: /Points/i })[0]
    ).toBeInTheDocument();
    expect(
      screen.getAllByRole("columnheader", { name: /Total Rewards/i })[0]
    ).toBeInTheDocument();

    expect(screen.getByText("$ 200.65")).toBeInTheDocument();

    expect(calculatePoints).toHaveBeenCalledWith(120.9);
    expect(calculatePoints).toHaveBeenCalledWith(75.5);
    expect(calculatePoints).toHaveBeenCalledWith(200.4);
    expect(totalPoint).toHaveBeenCalledWith(transactions[0]);
  });
});
