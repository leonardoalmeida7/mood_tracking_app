import { useLogMood } from "../contexts/LogMoodContext";
import { toast } from "react-toastify";
import { useSaveMoodEntry } from "./useSaveMoodEntry";

export const useStepMood = () => {
  const {
    step,
    setStep,
    howMoodToday,
    howDidYouFeel,
    writeAboutYourDay,
    hoursLastNight,
    setActiveModal,
    setConcluided,
  } = useLogMood();
  const { saveMoodEntry } = useSaveMoodEntry();

  // Quantidade de passos (mantida aqui como fonte única da verdade)
  const length = 4;
  const concluded = step === length;

  const nextStep = async () => {
    if (concluded) {
      await saveMoodEntry({
        mood: howMoodToday,
        feelings: howDidYouFeel,
        notes: writeAboutYourDay,
        sleepHours: hoursLastNight,
      });
      setActiveModal(false);
      setConcluided(true);
      return;
    }
    setStep(step + 1);
  };

  const handleNext = () => {
    if (step === 1 && howMoodToday.length === 0) {
      toast.error("Select how you feel today.");
      return;
    }
    if (step === 2 && howDidYouFeel.length === 0) {
      toast.error("Select at least one feeling.");
      return;
    }
    if (step === 3 && !writeAboutYourDay.trim()) {
      toast.error("Write something about your day.");
      return;
    }
    if (step === 4 && !hoursLastNight) {
      toast.error("Enter how many hours you slept last night.");
      return;
    }

    nextStep();
  };

  return { handleNext, step, length };
};
