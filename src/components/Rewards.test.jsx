import { render, screen, waitFor } from "@testing-library/react";
import Rewards from "./Rewards";
import { fetchCustomerData } from "../api/api";
import transactions from "../../public/data/data.json";

vi.mock("../api/api", () => ({
  fetchCustomerData: vi.fn(),
}));

describe("Rewards", () => {
  it(" Renders loading state initially", () => {
    render(<Rewards />);

    expect(
      screen.getByRole("columnheader", { name: /customer name/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("columnheader", { name: /Total Points/i })
    ).toBeInTheDocument();
  });

  it(" render customer data after successful API call", async () => {
    fetchCustomerData.mockResolvedValue([transactions[0]]);

    render(<Rewards data={[transactions[0]]} />);

    await waitFor(() => {
      expect(screen.getByText("John Doe")).toBeInTheDocument();
    });
  });
});
