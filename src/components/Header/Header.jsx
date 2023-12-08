import styles from "./Header.module.css";
import linkedinLogo from "../../assets/logo-linkedin.svg";
import githubLogo from "../../assets/logo-github.svg";
import telegramLogo from "../../assets/logo-telegram.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.title}>To-Do List</h1>
        <ul className={styles.socialMedia}>
          <li>
            <a
              className={styles.link}
              href="https://linkedin.com"
              target="blank"
            >
              <img src={linkedinLogo} alt="Logo Linkedin" />
            </a>
          </li>
          <li>
            <a className={styles.link} href="https://github.com" target="blank">
              <img src={githubLogo} alt="Logo GitHub" />
            </a>
          </li>
          <li>
            <a className={styles.link} href="https://t.me" target="blank">
              <img src={telegramLogo} alt="Logo Telegram" />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
