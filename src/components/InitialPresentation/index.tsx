import { useState } from "react";
import { DefaultButton } from "../../ui/DefaultButton";
import { LogYourMoodModal } from "../LogYourMoodModal";
import styles from "./styles.module.css";

export const InitialPresentation = () => {
  const [isModalActive, setIsModalActive] = useState<boolean>(false);
  const handleClick = () => {
    setIsModalActive(true);
  };

  return (
    <div className={`${styles.container} text-center`}>
      <span className={styles.greeting}>Hello, Leonardo!</span>
      <h1>How are you feeling today?</h1>
      <p className={styles.date}>Wednesday, April 16th, 2025</p>
      <DefaultButton type="button" onClick={handleClick}>Log Today's mood</DefaultButton>
      <LogYourMoodModal active={isModalActive} />
    </div>
  );
};
