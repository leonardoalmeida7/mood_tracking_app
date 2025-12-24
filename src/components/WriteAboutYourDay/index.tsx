import { useLogMood } from "../../contexts/LogMoodContext";

import styles from "./styles.module.css";

export const WriteAboutYourDay = () => {
  const { writeAboutYourDay, setWriteAboutYourDay } = useLogMood();

  return (
    <div className={styles.container}>
      <h2 className="text-start mb-4">Write about your day...</h2>
      <textarea
        name="writeAboutYourDay"
        id="writeAboutYourDay"
        className={styles.textarea}
        placeholder="Today, I felt..."
        maxLength={150}
        value={writeAboutYourDay}
        onChange={(e) => setWriteAboutYourDay(e.target.value)}
      ></textarea>
      <span>0/150</span>
    </div>
  );
};
