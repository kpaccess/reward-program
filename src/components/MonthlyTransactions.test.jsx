import { render, screen } from "@testing-library/react";
import MonthlyTransactions from "./MonthlyTransactions";
import { transactions } from "../data/data";

describe(" Monthly Transactions", () => {
  it("renders correctily with provided data", () => {
    const { debug } = render(<MonthlyTransactions data={transactions} />);
    debug();

    expect(
      screen.getByText(
        "Monthwise Transactions for each customer and total rewards"
      )
    ).toBeInTheDocument();

    expect(screen.queryByText(/John Doe/i)).toBeInTheDocument();
    expect(
      screen.getAllByRole("columnheader", { name: /Date/i })[0]
    ).toBeInTheDocument();
    expect(
      screen.getAllByRole("columnheader", { name: /Amount/i })[0]
    ).toBeInTheDocument();

    expect(
      screen.getAllByRole("columnheader", { name: /Points/i })[0]
    ).toBeInTheDocument();
    expect(
      screen.getAllByRole("columnheader", { name: /Date/i })[0]
    ).toBeInTheDocument();

    expect(screen.getByText("2024-06-02")).toBeInTheDocument();
    expect(screen.getByText("$ 200.65")).toBeInTheDocument();
  });
});
