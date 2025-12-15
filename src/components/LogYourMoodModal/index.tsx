
import { DefaultButton } from "../../ui/DefaultButton";
/* import { MoodToday } from "../MoodToday";
import { DidYouFeelContainer } from "../DidYouFeelContainer"; */

import styles from "./styles.module.css";
import { WriteAboutYourDay } from "../WriteAboutYourDay";

type LogYourMoodModalProps = {
  active: boolean;
};

export const LogYourMoodModal = ({ active }: LogYourMoodModalProps) => {
  return (
    <div
      className={`${styles.container} ${
        active ? styles.active : styles.hidden
      }`}
    >
      <div className={styles.content}>
        <div className="text-start">
          <h1>Log your mood</h1>
          <div className={`${styles.bars} d-flex gap-3 my-4 `}>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
          </div>
        </div>
        <WriteAboutYourDay />
        <DefaultButton>Continue</DefaultButton>
      </div>
    </div>
  );
};
