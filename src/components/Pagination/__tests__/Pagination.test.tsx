import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { TOTAL_PAGES } from "@/utils/constants";

import Pagination from "..";

test("Should disable previous button when current page is 1", () => {
  render(<Pagination currentPage={1} />);

  expect(screen.getByTitle("previous-page")).toBeDisabled();

  expect(screen.getByTitle("next-page")).not.toBeDisabled();
});

test("Should disable next button when current page is equal to max number of pages", () => {
  render(<Pagination currentPage={TOTAL_PAGES} />);

  expect(screen.getByTitle("previous-page")).not.toBeDisabled();

  expect(screen.getByTitle("next-page")).toBeDisabled();
});

test("Should have correct value of current page", () => {
  render(<Pagination currentPage={7} />);

  expect(screen.getByTestId("pagination-current-page")).toHaveTextContent("7");
});
