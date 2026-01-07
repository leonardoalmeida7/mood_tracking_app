import { useFetchQuery } from "../../Hooks/useFetchQuery";
import { useEffect, useRef, useState } from "react";

import iconSleep from "../../assets/images/icon-sleep.svg";
import { moodInfo } from "../../assets/data/moodInfo";
import type { MoodEntry, MoodApiResponse } from "../../types/mood";

import styles from "./styles.module.css";
import { TrendInfo } from "../TrendInfo";

export const TrendsContainer = () => {
  const { data} = useFetchQuery<MoodApiResponse>("all", "fetchAll");
 
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [hoveredEntry, setHoveredEntry] = useState<number | null>(null);

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
        return 75;
      case "5-6 hours":
        return 50;
      case "3-4 hours":
        return 30;
      default:
        return 15;
    }
  };

  // Generate last 14 days
  const generateLast14Days = () => {
    const days = [];
    for (let i = 9; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      date.setHours(0, 0, 0, 0);
      days.push(date);
    }
    return days;
  };

  // Scroll to the right on mount
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = scrollContainerRef.current.scrollWidth;
    }
  }, [data]);

  // Merge data with dates
  const getMergedData = () => {
    const last14Days = generateLast14Days();
    
    return last14Days.map(date => {
      const dateStr = date.toISOString().split('T')[0];
      const entry = data?.data.find((item: MoodEntry) => {
        const itemDate = new Date(item.createdAt).toISOString().split('T')[0];
        return itemDate === dateStr;
      });
      
      return {
        date: date.toISOString(),
        entry: entry || null
      };
    });
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
          ref={scrollContainerRef}
          className={`${styles.tableContent} d-flex gap-3`}
          style={{
            overflowX: "auto",
            overflowY: "visible",
            scrollBehavior: "smooth",
          }}
        >
          {getMergedData().map(({ date, entry }, index) => (
            <div
              className="d-flex flex-column flex-shrink-0"
              style={{ width: "42px", minWidth: "42px" }}
              key={`${date}-${index}`}
            >
              {entry ? (
                <div
                  className={styles.bar}
                  style={{
                    backgroundColor: `${getMoodValue(entry.mood)?.color}`,
                    height: `${convertSleepToNumber(entry.sleepHours)}%`,
                  }}
                >
                  <img
                    src={getMoodValue(entry.mood)?.iconWhite}
                    alt={getMoodValue(entry.mood)?.alt}
                    onMouseEnter={() => setHoveredEntry(index)}
                    onMouseLeave={() => setHoveredEntry(null)}
                  />
                  {hoveredEntry === index && <TrendInfo data={entry} image={getMoodValue(entry.mood)?.icon} height={convertSleepToNumber(entry.sleepHours)} />}
                </div>
              ) : (
                <div
                  className={styles.bar}
                  style={{
                    backgroundColor: "transparent",
                    height: "0%",
                  }}
                />
              )}
              <div>
                <span className="fw-semibold">{formatDate(date)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};
