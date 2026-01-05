import { useFetchQuery } from "../../Hooks/useFetchQuery";

import iconSleep from "../../assets/images/icon-sleep.svg";
import { useLogMood } from "../../contexts/LogMoodContext";
import { moodInfo } from "../../assets/data/moodInfo";

import styles from "./styles.module.css";

// Exemplo de dados
/* const quantities = [10, 8, 6, 4, 2, 0];
const days = Array.from({ length: 7 }, (_, i) => i + 1); // Dias 1 a 7
const data = [2, 4, 6, 8, 10, 6, 4]; // Quantidade por dia */

export const TrendsContainer = () => {
  const { data, error, isLoading } = useFetchQuery("all", "fetchAll");

  const getMoodValue = (mood: string) => {
    const moodEntry = moodInfo.find((m) => m.mood === mood);
    return moodEntry || null;
  };

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      month: "short",
      day: "numeric",
    };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
  };

  const convertSleepToNumber = (sleepHours: string) => {
    switch (sleepHours) {
      case "9+ hours":
        return 100;
      case "7-8 hours":
        return 60;
      case "5-6 hours":
        return 40;
      case "3-4 hours":
        return 30;
      default:
        return 20;
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Mood and sleep trends</h2>
      <div className="d-flex justify-content-between">
        <div className={`${styles.tableHeaderLeft} d-flex flex-column gap-3`}>
          <div>
            <img src={iconSleep} alt="Sleep Icon" />
            9+ hours
          </div>
          <div>
            <img src={iconSleep} alt="Sleep Icon" />
            7-8 hours
          </div>
          <div>
            <img src={iconSleep} alt="Sleep Icon" />
            5-6 hours
          </div>
          <div>
            <img src={iconSleep} alt="Sleep Icon" />
            3-4 hours
          </div>
          <div>
            <img src={iconSleep} alt="Sleep Icon" />
            0-2 hours
          </div>
        </div>
        <div
          className={`${styles.tableContent} d-flex gap-3`}
          style={{
            overflowX: "auto",
            overflowY: "visible",
            scrollBehavior: "smooth",
          }}
        >
          {data?.data.map(({ id, mood, createdAt, sleepHours }) => (
            <div
              className="d-flex flex-column flex-shrink-0"
              style={{ width: "35px", minWidth: "35px" }}
              key={id}
            >
              <div
                className={styles.bar}
                style={{
                  backgroundColor: `${getMoodValue(mood)?.color}`,
                  height: `${convertSleepToNumber(sleepHours)}%`,
                }}
              >
                <img
                  src={getMoodValue(mood)?.icon}
                  alt={getMoodValue(mood)?.alt}
                />
              </div>
              <div>
                <span className="fw-semibold">{formatDate(createdAt)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
