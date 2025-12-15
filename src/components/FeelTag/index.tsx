import styles from "./styles.module.css";

type FeelTagProps = {
  feel: string;
};

export const FeelTag = ({ feel }: FeelTagProps) => {
  return (
    <div className={`${styles.tag} d-flex p-2 gap-2`}>
      <input type="checkbox" name="feeling" id="feeling1" />
      <label htmlFor="feeling1">{feel}</label>
    </div>
  );
};
