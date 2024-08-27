import { describe, it, expect, vi } from "vitest"; // Import from Vitest
import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import { fetchTransactions } from "./api";

vi.mock("./api", () => ({
  fetchTransactions: vi.fn(),
}));

describe("App Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("displays loading message while fetching data", () => {
    fetchTransactions.mockImplementation(() => new Promise(() => {}));

    render(<App />);

    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it("displays error message when fetching data fails", async () => {
    fetchTransactions.mockRejectedValue(new Error("Failed to fetch data"));

    render(<App />);

    const errorMessage = await screen.findByText(/error loading data/i);
    expect(errorMessage).toBeInTheDocument();
  });
});
