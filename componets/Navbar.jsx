import React from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <nav className={styles.nav__bar}>
      <h3>Blogs/Feeds</h3>
      <div className={styles.nav__bar_links}>
        <Link href="/">Blogs</Link>
        <Link href="/feeds">Feeds</Link>
      </div>
    </nav>
  );
};

export default Navbar;
