import { useFetchQuery } from "../../Hooks/useFetchQuery";
import bgAverages from "../../assets/images/bg-pattern-averages.svg";

import styles from "./styles.module.css";

type AverageContainerProps = {
  latestMood: any;
};

export const AverageContainer = ({ latestMood }: AverageContainerProps) => {
  const { data, error, isLoading } = useFetchQuery("all", "fetchAll");
  const length = data ? data.data.length : 0;
  if(length >= 5) {
    const lastFiveMoods = data.data.slice(-5);
  }
  return (
    <div className={`${styles.container} my-4 my-xl-0 d-flex flex-column gap-3`}>
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
