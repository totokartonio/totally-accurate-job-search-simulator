import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <a href="/" className={styles.logo}>
        <span>Totally Accurate Job Search Simulator</span>
      </a>
    </header>
  );
};

export { Header };
