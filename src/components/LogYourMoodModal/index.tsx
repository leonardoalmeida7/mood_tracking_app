import { useLogMood } from "../../contexts/LogMoodContext";
import { DefaultButton } from "../../ui/DefaultButton";
import { useStepMood } from "../../Hooks/useStepMood";
import { BarsSteps } from "../BarsSteps";
import { MoodToday } from "../MoodToday";
import { DidYouFeelContainer } from "../DidYouFeelContainer";
import { WriteAboutYourDay } from "../WriteAboutYourDay";
import { HoursLastNight } from "../HoursLastNight";

import styles from "./styles.module.css";

type LogYourMoodModalProps = {
  active: boolean;
};
export const LogYourMoodModal: React.FC<LogYourMoodModalProps> = ({ active }) => {
  const { handleNext, step, length } = useStepMood();
  const { setActiveModal } = useLogMood();  // Close modal function

  const stepComponents = [
    <MoodToday key={1} />,
    <DidYouFeelContainer key={2} />,
    <WriteAboutYourDay key={3} />,
    <HoursLastNight key={4} />,
  ];
  const StepComponent = stepComponents[step - 1] || null;

  return (
    <div
      className={`${styles.container} ${
        active ? styles.active : styles.hidden
      }`}
      onClick={() => setActiveModal(false)}
    >
      <div className={styles.content} onClick={e => e.stopPropagation()}>
        <div className="text-start">
          <h1>Log your mood</h1>
          <BarsSteps step={step} length={length} />
          {StepComponent}
        </div>
        <DefaultButton onClick={handleNext}>{step === length ? "Finish" : "Continue"}</DefaultButton>
      </div>
    </div>
  );
};