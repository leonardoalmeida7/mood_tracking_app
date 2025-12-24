
import { feelsTags } from "../../assets/data/moodInfo";
import { FeelTag } from "../FeelTag";
import { useLogMood } from "../../contexts/LogMoodContext";

import styles from "./styles.module.css";


export const DidYouFeelContainer = () => {
  const { howDidYouFeel, setHowDidYouFeel } = useLogMood();

  const handleTagSelect = (tag: string) => {
    let updatedTags = [...howDidYouFeel];
    if (updatedTags.includes(tag)) {
      updatedTags = updatedTags.filter((t) => t !== tag);
    } else {
      if (updatedTags.length < 3) {
        updatedTags.push(tag);
      }
    }
    setHowDidYouFeel(updatedTags);
  };

  return (
    <div>
      <div className={`${styles.header} mb-3 text-start`}>
        <h2>How did you feel?</h2>
        <p className="fw-semibold">Select up to three tags:</p>
      </div>
      <div className="d-flex flex-wrap gap-3">
        {feelsTags.map((tag, index) => (
          <FeelTag
            key={index}
            feel={tag}
            id={`feeling-${index}`}
            selected={howDidYouFeel.includes(tag)}
            onSelect={() => handleTagSelect(tag)}
          />
        ))}
      </div>
    </div>
  );
};
