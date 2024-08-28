import { render, screen, fireEvent } from "@testing-library/react";
import CustomerDetails from "./CustomerDetails";
import { mockData } from "../data/mockData";

describe("CustomerDetails", () => {
  it("renders customer Details page correctly", () => {
    render(<CustomerDetails customer={mockData} />);

    expect(screen.getByText("John Doe")).toBeInTheDocument();
  });
  it("toggle details visibility when clicked", () => {
    render(<CustomerDetails customer={mockData} />);

    expect(screen.queryByTestId("customer-details")).not.toBeInTheDocument();

    //find the toggle link
    const toggleLink = screen.queryByTestId("customer-name");

    //click the toggle link
    fireEvent.click(toggleLink);

    expect(screen.getByTestId("customer-details")).toBeInTheDocument();

    // Click again to hide
    fireEvent.click(toggleLink);

    expect(screen.queryByTestId("customer-details")).not.toBeInTheDocument();
  });

  it("should display the month and points", () => {
    render(<CustomerDetails customer={mockData} />);
    //find the toggle link
    const toggleLink = screen.queryByTestId("customer-name");
    //click the toggle link
    fireEvent.click(toggleLink);
    expect(screen.queryByText(/4-2024/i)).toBeInTheDocument();
    expect(screen.queryByText(/92 points/i)).toBeInTheDocument();
  });
});
