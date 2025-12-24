import { MoodInput } from "../MoodInput";
import { moodInfo } from "../../assets/data/moodInfo";
import { useLogMood } from "../../contexts/LogMoodContext";

export const MoodToday = () => {
  const { howMoodToday, setHowMoodToday } = useLogMood();

  return (
    <div>
      <h2 className="fw-bold">How was your mood today?</h2>
      {moodInfo.map(({ id, mood, icon, alt }) => (
        <MoodInput
          key={id}
          mood={mood}
          icon={icon}
          alt={alt}
          selected={howMoodToday === mood}
          onSelect={() => setHowMoodToday(mood)}
        />
      ))}
    </div>
  );
};
