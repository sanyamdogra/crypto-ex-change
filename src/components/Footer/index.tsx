import React from "react";
import styles from "./Footer.module.css";
import { FOOTER_CONTENT } from "@/utils/constants";

const Footer: React.FC = () => {
  return (
    <footer className={styles.container} data-testid="exchange-footer">
      {FOOTER_CONTENT}
    </footer>
  );
};

export default Footer;
