import { Exchange } from "@/types";

export const BASE_API_URL = "https://api.coingecko.com/api/v3/exchanges";

export const ITEMS_PER_PAGE = 15;

// For demonstration purpose only
export const TOTAL_PAGES = 20;

export const FOOTER_CONTENT = `Made with \u2665 by Sanyam Dogra`;

export const MOCK_EXCHANGES: Exchange[] = [
  {
    id: "1",
    name: "Binance",
    year_established: 2017,
    country: "Cayman Islands",
    trust_score: 10,
    trade_volume_24h_btc: 1000.5,
    trade_volume_24h_btc_normalized: 950.3,
    url: "https://www.binance.com",
    image: "/binance-logo.png",
  },
  {
    id: "2",
    name: "Coinbase",
    year_established: 2012,
    country: "United States",
    trust_score: 9,
    trade_volume_24h_btc: 800.25,
    trade_volume_24h_btc_normalized: 750.75,
    url: "https://www.coinbase.com",
    image: "/coinbase-logo.png",
  },
];
