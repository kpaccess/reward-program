import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Rewards from "./Rewards";
import { fetchCustomerData } from "../api/api";

vi.mock("../api/api", () => ({
  fetchCustomerData: vi.fn(),
}));

describe("Rewards", () => {
  it(" Renders loading state initially", () => {
    const { debug } = render(<Rewards />);
    debug();

    expect(
      screen.getByRole("columnheader", { name: /customer name/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("columnheader", { name: /Total Points/i })
    ).toBeInTheDocument();
  });
});
