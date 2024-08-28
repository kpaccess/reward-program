import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders without creashing", () => {
    render(<App />);
  });
});
