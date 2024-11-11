import { TOTAL_PAGES } from "./constants";

export const formatPageNumber = (page: string) => {
  let pageNumber = parseInt(page || "1", 10);

  pageNumber = Math.min(Math.max(pageNumber, 1), TOTAL_PAGES);

  return pageNumber;
};
