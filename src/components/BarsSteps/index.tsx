import styles from "./styles.module.css";

type BarsStepsProps = {
  step: number;
  length: number;
};

export const BarsSteps = ({ step, length }: BarsStepsProps) => {
  return (
    <div className={`${styles.bars} d-flex gap-3 my-4 `}>
      {[...Array(length)].map((_, index) => (
        <div
          key={index}
          className={`${styles.bar} ${step > index ? styles.actual : ""}`}
        ></div>
      ))}  
    </div>
  );
};
