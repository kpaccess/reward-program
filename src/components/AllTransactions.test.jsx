import { render, screen } from "@testing-library/react";
import AllTransactions from "./AllTransactions";
import { transactions } from "../data/data";

describe("AllTransactions", () => {
  it(" renders without creashing", () => {
    render(<AllTransactions data={transactions} />);

    expect(screen.getByTestId("customer-name").toBeInTheDocument);
    expect(screen.getByTestId("customer-id").toBeInTheDocument);
    expect(screen.getByTestId("year").toBeInTheDocument);
    expect(screen.getByTestId("month").toBeInTheDocument);
    expect(screen.getByTestId("transaction-id").toBeInTheDocument);
    expect(screen.getByTestId("amount").toBeInTheDocument);
    expect(screen.getByTestId("points").toBeInTheDocument);

    expect(screen.getByText(/Jack Doe/i)).toBeInTheDocument();
  });
});
