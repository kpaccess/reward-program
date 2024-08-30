import { render, screen, waitFor } from "@testing-library/react";
import { transactions } from "./data/data";
import Driver from "./index";
import { fetchTransactions } from "./api/api";
import { ErrorFallback } from "./utils/ErrorFallback";
import { vi, expect } from "vitest";

vi.mock("../api/api/", () => ({
  fetchTransactions: vi.fn(),
}));

describe("Driver component", () => {
  it("renders loading state initially", () => {
    render(<Driver />);
    expect(screen.getByTestId("loading")).toBeInTheDocument();
  });
});
