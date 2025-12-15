import styles from "./styles.module.css";

type MoodInputProps = {
  mood: string;
  icon: string;
  alt: string;
};

export const MoodInput = ({ mood, icon, alt }: MoodInputProps) => {
  return (
    <div className={`${styles.container} d-flex align-items-center justify-content-between py-2 px-3 my-3`}>
      <div className="d-flex align-items-center gap-2">
        <input type="radio" name="mood" id={mood} />
        <label htmlFor={mood}>{mood}</label>
      </div>
      <img src={icon} alt={alt} />
    </div>
  );
};
