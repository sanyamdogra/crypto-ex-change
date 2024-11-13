import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { FOOTER_CONTENT } from "@/utils/constants";

import Footer from "..";

test("Should render correct footer message", () => {
  render(<Footer />);

  expect(screen.getByTestId("exchange-footer")).toHaveTextContent(
    FOOTER_CONTENT
  );
});
