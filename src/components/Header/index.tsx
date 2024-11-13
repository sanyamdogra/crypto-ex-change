import Link from "next/link";

import styles from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1>
        <Link href={"/"} aria-label="Home Page">
          ex <span className={styles.subHeading}> | change </span>
        </Link>
      </h1>
    </header>
  );
};

export default Header;
