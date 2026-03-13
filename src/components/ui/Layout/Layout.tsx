import type { ReactNode } from "react";
import styles from "./Layout.module.css";
import Header from "../../Header";
import Footer from "../../Footer";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

export { Layout };
