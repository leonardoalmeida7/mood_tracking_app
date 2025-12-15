import { feelsTags } from "../../assets/data/moodInfo";
import { FeelTag } from "../FeelTag";

import styles from "./styles.module.css";

export const DidYouFeelContainer = () => {
  return (
    <div>
      <div className={`${styles.header} mb-3 text-start`}>
        <h2>How did you feel?</h2>
        <p className="fw-semibold">Select up to three tags:</p>
      </div>
      <div className="d-flex flex-wrap gap-3">
        {feelsTags.map((tag, index) => (
          <FeelTag key={index} feel={tag} />
        ))}
      </div>
    </div>
  );
};
