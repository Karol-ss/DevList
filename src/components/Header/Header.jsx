import styles from "./Header.module.css";
import robloxLogo from "../../assets/logo-roblox.svg";
import githubLogo from "../../assets/logo-github.svg";
import instagramLogo from "../../assets/logo-instagram.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.title}>To-Do List</h1>
        <ul className={styles.socialMedia}>
          <li>
            <a
              className={styles.link}
              href="https://www.roblox.com/users/684205086/profile"
              target="blank"
            >
              <img src={robloxLogo} alt="Logo Roblox" />
            </a>
          </li>
          <li>
            <a className={styles.link} href="https://github.com/Karol-ss" target="blank">
              <img src={githubLogo} alt="Logo GitHub" />
            </a>
          </li>
          <li>
            <a className={styles.link} href="https://www.instagram.com/kkrol._/" target="blank">
              <img src={instagramLogo} alt="Logo Instagram" />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
