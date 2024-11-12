export interface Exchange {
  id: string;
  name: string;
  image: string;
  year_established?: number;
  country?: string;
  trust_score: number;
  trade_volume_24h_btc: number;
  trade_volume_24h_btc_normalized: number;
  url: string;
}

export type BadgeColors = "green" | "red" | "yellow" | "blue";
