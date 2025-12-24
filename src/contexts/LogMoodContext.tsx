import { createContext, useState, useContext, useEffect, use } from "react";;

type LogMoodContextType = {
  concluided: boolean;
  activeModal: boolean;
  howMoodToday: string;
  step: number;
  howDidYouFeel: string[];
  writeAboutYourDay: string;
  hoursLastNight: string;
  setConcluided: (concluided: boolean) => void;
  setActiveModal: (active: boolean) => void;
  setHoursLastNight: (hours: string) => void;
  setWriteAboutYourDay: (text: string) => void;
  setHowDidYouFeel: (moodId: string[]) => void;
  setStep: (step: number) => void;
  setHowMoodToday: (moodId: string) => void;
};

export const LogMoodContext = createContext<LogMoodContextType | null>(null);

export const LogMoodProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [activeModal, setActiveModal] =  useState<boolean>(false);
  const [howMoodToday, setHowMoodToday] = useState<string>("");
  const [howDidYouFeel, setHowDidYouFeel] = useState<string[]>([]);
  const [writeAboutYourDay, setWriteAboutYourDay] = useState<string>("");
  const [hoursLastNight, setHoursLastNight] = useState<string>("");
  const [step, setStep] = useState<number>(1);
  const [concluided, setConcluided] = useState<boolean>(false);


  useEffect(() => {
    if (!activeModal) {
      setStep(1);
      setHowMoodToday("");
      setHowDidYouFeel([]);
      setWriteAboutYourDay("");
      setHoursLastNight("");
    }
  }, [activeModal]);

  return (
    <LogMoodContext.Provider
      value={{
        concluided,
        activeModal,
        howMoodToday,
        howDidYouFeel,
        writeAboutYourDay,
        hoursLastNight,
        step,
        setConcluided,
        setActiveModal,
        setHowMoodToday,
        setHowDidYouFeel,
        setWriteAboutYourDay,
        setHoursLastNight,
        setStep,
      }}
    >
      {children}
    </LogMoodContext.Provider>
  );
};

export const useLogMood = () => {
  const context = useContext(LogMoodContext);
  if (!context) {
    throw new Error("useLogMood must be used within a LogMoodProvider");
  }
  return context;
};
