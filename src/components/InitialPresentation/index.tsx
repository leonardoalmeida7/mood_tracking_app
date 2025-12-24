import { useContext } from "react";
import { DefaultButton } from "../../ui/DefaultButton";
import { LogYourMoodModal } from "../LogYourMoodModal";
import { useLogMood } from "../../contexts/LogMoodContext";
import { AuthContext } from "../../contexts/AuthContext";
import { getDate } from "../../utils/getDate";

import styles from "./styles.module.css";

type InitialPresentationProps = {
  latestMood: boolean;
  loading: boolean;
};

export const InitialPresentation = ({
  latestMood,
  loading,
}: InitialPresentationProps) => {
  const { activeModal, setActiveModal } = useLogMood();
  const { user } = useContext(AuthContext);
  const { day, dayWeek, month, year } = getDate();

  const handleClick = () => {
    setActiveModal(true);
  };

  return (
    <div className={`${styles.container} text-center`}>
      <span className={styles.greeting}>
        Hello, {user?.name.split(" ")[0]}!
      </span>
      <h1>How are you feeling today?</h1>
      <p className={styles.date}>{`${dayWeek}, ${month} ${day}, ${year}`}</p>
      {latestMood && (
        <DefaultButton type="button" onClick={handleClick}>
          Log Today's mood
        </DefaultButton>
      )}
      {
        loading && <p className="mt-4">Loading your latest mood...</p>
      }
      <LogYourMoodModal active={activeModal} />
    </div>
  );
};
