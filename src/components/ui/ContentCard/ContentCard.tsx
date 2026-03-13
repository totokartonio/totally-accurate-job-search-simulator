import type { ReactNode } from "react";
import styles from "./ContentCard.module.css";

const ContentCard = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <div className={styles.outter}>
        <div className={styles.inner}>{children}</div>
      </div>
    </main>
  );
};

export { ContentCard };
