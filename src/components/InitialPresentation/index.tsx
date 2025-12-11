import { DefaultButton } from "../../ui/DefaultButton";
import styles from "./styles.module.css";

export const InitialPresentation = () => {
  return (
    <div className={`${styles.container} text-center`}>
      <span className={styles.greeting}>Hello, Leonardo!</span>
      <h1>How are you feeling today?</h1>
      <p className={styles.date}>Wednesday, April 16th, 2025</p>
      <DefaultButton type="button">Log Today's mood</DefaultButton>
    </div>
  );
};
