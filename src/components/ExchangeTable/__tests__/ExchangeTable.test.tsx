import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";

import { MOCK_EXCHANGES } from "@/utils/constants";

import ExchangeTable from "..";

test("renders the table with correct headers", () => {
  render(<ExchangeTable exchanges={MOCK_EXCHANGES} />);

  expect(screen.getByText(/Exchange Name/i)).toBeInTheDocument();
  expect(screen.getByText(/Year Established/i)).toBeInTheDocument();
  expect(screen.getByText(/Country/i)).toBeInTheDocument();
  expect(screen.getByText(/Trust Score/i)).toBeInTheDocument();
  expect(screen.getByText(/24h Trade Volume \(BTC\)/i)).toBeInTheDocument();
  expect(screen.getByText(/Normalized Volume \(BTC\)/i)).toBeInTheDocument();
});

test("renders exchange data correctly", () => {
  render(<ExchangeTable exchanges={MOCK_EXCHANGES} />);

  MOCK_EXCHANGES.forEach((exchange) => {
    expect(screen.getByText(exchange.name)).toBeInTheDocument();

    expect(
      screen.getByText(exchange.year_established!.toString())
    ).toBeInTheDocument();

    expect(screen.getByText(exchange.country!)).toBeInTheDocument();

    expect(
      screen.getByText(exchange.trust_score.toString())
    ).toBeInTheDocument();

    expect(
      screen.getByText(exchange.trade_volume_24h_btc.toFixed(2))
    ).toBeInTheDocument();

    expect(
      screen.getByText(exchange.trade_volume_24h_btc_normalized.toFixed(2))
    ).toBeInTheDocument();
  });
});
