import { rest } from "msw";
import "@testing-library/jest-dom";
import { setupServer } from "msw/node";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";

import SearchBox from "./SearchBox";
import { CITY } from "../../../mocks/city";
import { ContextProvider, reducer } from "../../../hooks/contextProvider";
import { findCitiesEndpoint } from "../../../services/endpoints";

const server = setupServer(
  rest.get(findCitiesEndpoint("Sydney"), (req, res, ctx) => {
    return res(ctx.json(CITY));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const Component = (
  <ContextProvider
    reducer={reducer}
    initialState={{ city: null, cities: null, weather: null }}
  >
    <SearchBox label="Search" />
  </ContextProvider>
);

test("renders SearchBox component", async () => {
  render(Component);

  const element = screen.getByText("Search");
  expect(element).toBeInTheDocument();
});

test("allows user to add the keyword and fetches results for the keyword", async () => {
  render(Component);

  fireEvent.change(screen.getByTestId(/search-input/i), {
    target: { value: "Sydney" },
  });

  const input = await screen.findByDisplayValue("Sydney");
  expect(input).toBeInTheDocument();

  await waitFor(() => screen.findByRole("listbox"));
});
