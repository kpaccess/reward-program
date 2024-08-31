import { render, screen } from "@testing-library/react";
import Rewards from "./Rewards";

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
});
