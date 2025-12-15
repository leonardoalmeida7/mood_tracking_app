import bgAverages from "../../assets/images/bg-pattern-averages.svg";

import styles from "./styles.module.css";

export const AverageContainer = () => {
  return (
    <div className={`${styles.container} my-4 d-flex flex-column gap-3`}>
      <div>
        <p className={styles.title}>
          Average Mood <span>(Last 5 Check-ins)</span>
        </p>
        <div className={styles.content}>
          <img src={bgAverages} alt="Background pattern for averages" />
          <h4>Keep Tracking!</h4>
          <p>Log 5 check-ins to see your average mood.</p>
        </div>
      </div>
      <div>
        <p className={styles.title}>
          Average Sleep <span>(Last 5 Check-ins)</span>
        </p>
        <div className={styles.content}>
          <img src={bgAverages} alt="Background pattern for averages" />
          <h4>Not enough data yet!</h4>
          <p>Track 5 nights to view average sleep.</p>
        </div>
      </div>
    </div>
  );
};
