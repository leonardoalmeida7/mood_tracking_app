import { MoodInput } from "../MoodInput";
import { moodInfo } from "../../assets/data/moodInfo";

export const MoodToday = () => {
  return (
    <div>
      <h2 className="fw-bold">How was your mood today?</h2>
      {moodInfo.map(({ mood, icon, alt }, index) => (
        <MoodInput key={index} mood={mood} icon={icon} alt={alt} />
      ))}
    </div>
  );
};
