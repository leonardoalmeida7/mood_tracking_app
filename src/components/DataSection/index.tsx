import { moodInfo } from "../../assets/data/moodInfo";
import IconSleep from "../../assets/images/icon-sleep.svg";
import IconQuote from "../../assets/images/icon-quote.svg";
import IconReflection from "../../assets/images/icon-reflection.svg";

import styles from "./styles.module.css";

type DataSectionProps = {
  lastData: any;
};

export const DataSection = ({ lastData }: DataSectionProps) => {
  const { mood } = lastData.data;
  const moodDetails = moodInfo.find((moodItem) => moodItem.mood === mood);

  console.log();
  return (
    <div className={`${styles.container} d-flex flex-column gap-4 my-4`}>
      <div className={`${styles.content} text-center px-4 py-4`}>
        <div>
          <span className={styles.feeling}>I'm feeling</span>
          <h1>{mood}</h1>
        </div>
        <img src={moodDetails?.icon} alt={moodDetails?.alt} className="my-4"/>
        <div>
          <img src={IconQuote} alt="Quote Icon" className={`${styles.quoteIcon} my-2`}/>
          <p>
            "Today I am feeling great! I accomplished a lot and had a wonderful
            time with friends."
          </p>
        </div>
      </div>
      <div className={`${styles.content} p-3`}>
        <div className="d-flex gap-2">
          <img src={IconSleep} alt="Sleep Icon" />
          <span className={`${styles.sleepLabel}`}>Sleep</span>
        </div>
        <p className={`${styles.sleepHours} m-0`}>{lastData.data.sleepHours}</p>
      </div>
      <div className={`${styles.content} p-3`}>
        <div className="d-flex gap-3">
          <img src={IconReflection} alt="Reflection Icon" />
          <p className="m-0">Reflection of the day</p>
        </div>
        <p className={styles.reflectionNotes}>{lastData.data.notes}</p>
        <div className={`${styles.feelingsContainer} d-flex flex-wrap gap-2`}>
            {JSON.parse(lastData.data.feelings).map((feeling: string, index: number) => (
              <span key={index} className={styles.feelingBadge}>#{feeling}</span>
            ))}
        </div>
      </div>
    </div>
  );
};
