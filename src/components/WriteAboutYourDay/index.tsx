import styles from "./styles.module.css";

export const WriteAboutYourDay = () => {
  return (
    <div className={styles.container}>
      <textarea
        name="writeAboutYourDay"
        id="writeAboutYourDay"
        className={styles.textarea}
        placeholder="Today, I felt..."
        maxLength={150}
      ></textarea>
      <span>0/150</span>
    </div>
  );
};
