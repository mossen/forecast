import { render, screen } from "@testing-library/react";

import Loading from "./Loading";

test("renders Loading component", () => {
  render(<Loading />);
  expect(screen.getByTestId("loading")).toBeInTheDocument();
});

it("renders Loading component but not showing it", () => {
  render(<Loading show={false} />);
  expect(screen.queryByTestId("loading")).toBeNull();
});
