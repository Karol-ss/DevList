import styles from "./Title.module.css";

const Title = ({ text, iconName }) => {
  const imgUrl = new URL(`/src/assets/icon-${iconName}.svg`, import.meta.url)
    .href;

  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <img src={imgUrl} alt="" />
      </div>
      <h2 className={styles.title}>{text}</h2>
    </div>
  );
};

export default Title;
