import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";

import ErrorMessage from "..";

const MockErrorResponse = {
  message: "Something went wrong!",
  status: 429,
};

test("Should render correct error message and status", () => {
  render(
    <ErrorMessage
      status={MockErrorResponse.status}
      error={MockErrorResponse.message}
    />
  );

  expect(screen.getByTestId("error-message")).toHaveTextContent(
    MockErrorResponse.message
  );

  expect(screen.getByTestId("error-message-status-code")).toHaveTextContent(
    `Status Code: ${MockErrorResponse.status}`
  );
});
