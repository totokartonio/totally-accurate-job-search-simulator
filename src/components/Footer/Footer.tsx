import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <span>
        Made by <a href="https://github.com/totokartonio">toto</a>
      </span>
    </footer>
  );
};

export { Footer };
