import React from "react";
import { FOOTER_CONTENT } from "@/utils/constants";

import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.container} data-testid="exchange-footer">
      {FOOTER_CONTENT}
    </footer>
  );
};

export default Footer;
