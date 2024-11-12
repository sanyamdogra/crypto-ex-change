import { BadgeColors } from "@/types";

import { TOTAL_PAGES } from "./constants";

export const formatPageNumber = (page: string) => {
  let pageNumber = parseInt(page || "1", 10);

  pageNumber = Math.min(Math.max(pageNumber, 1), TOTAL_PAGES);

  return pageNumber;
};

export const getColor = (value: number): BadgeColors => {
  switch (true) {
    case value > 8:
      return "green";
    case value > 5:
      return "yellow";
    case value > 0:
      return "red";
    default:
      return "blue";
  }
};
