import { describe, it } from "vitest";
import { render } from "@testing-library/react";
import CustomerList from "./CustomerList";
import mockData from "./mockData";

describe("CustomerList", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });
  it("renders", () => {
    render(<CustomerList data={mockData} />);
  });
});
