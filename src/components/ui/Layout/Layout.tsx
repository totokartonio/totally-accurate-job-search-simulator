import type { ReactNode } from "react";
import styles from "./Layout.module.css";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.outter}>
      <div className={styles.inner}>{children}</div>
    </div>
  );
};

export { Layout };
