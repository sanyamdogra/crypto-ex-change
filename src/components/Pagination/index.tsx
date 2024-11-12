import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import { Box, IconButton } from "@radix-ui/themes";

import { TOTAL_PAGES } from "@/utils/constants";

import styles from "./Pagination.module.css";

interface Props {
  currentPage: number;
}

const Pagination: React.FC<Props> = ({ currentPage }) => {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === TOTAL_PAGES;

  return (
    <Box className={styles.container}>
      <Link
        href={`/exchanges/${currentPage - 1}`}
        aria-disabled={isFirstPage}
        aria-label="previous-page-button"
      >
        <IconButton disabled={isFirstPage} variant="soft" title="previous-page">
          <ArrowLeftIcon />
        </IconButton>
      </Link>

      <span className={styles.pageInfo}>
        Page <span className={styles.pageInfoNumber}>{currentPage}</span> of{" "}
        {TOTAL_PAGES}
      </span>

      <Link
        href={`/exchanges/${currentPage + 1}`}
        aria-disabled={isLastPage}
        aria-label="next-page-button"
      >
        <IconButton disabled={isLastPage} variant="soft" title="next-page">
          <ArrowRightIcon />
        </IconButton>
      </Link>
    </Box>
  );
};

export default Pagination;
