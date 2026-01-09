import { parseFeelings } from '../../utils/parseFeelings';
import styles from './styles.module.css';

interface TrendInfoProps {
    data: any;
    image?: string;
    height?: number;
}

export const TrendInfo = ({ data, image, height }: TrendInfoProps) => {
  // Define position style based on height
  let positionStyle: React.CSSProperties = {};
  let arrowTop = '7%';
  if (height !== undefined) {
    if (height < 75) {
      positionStyle = {
        left: '-452%',
        top: '-140%',
      };
      arrowTop = '65%';
    } else {
      positionStyle = {
        left: '-452%',
        top: '0',
      };
      arrowTop = '7%';
    }
  }

  return (
    <div className={styles.trendInfoContainer} style={positionStyle}>
      <div
        className={styles.trendInfoArrow}
        style={{ top: arrowTop }}
      />
      <div className='d-flex flex-column mb-2'>
        <span className={styles.label}>Mood</span>
        <div className='d-flex align-items-center'>
            {image && <img src={image} alt={data.mood} />}
            <span style={{fontSize: "0.95rem"}}>
                {data.mood}
            </span>
        </div>
      </div>
      <div className='d-flex flex-column my-2'>
        <span className={styles.label}>Sleep</span>
        <span style={{fontSize: "0.95rem"}}>{data.sleepHours}</span>
      </div>
      <div className='d-flex flex-column my-2'>
        <span className={styles.label}>Reflection</span>
        <p className={styles.notes}>
            {data.notes}
        </p>
      </div>
      <div className='d-flex flex-column my-2'>
        <span className={styles.label}>Tags</span>
        <div>
            {parseFeelings(data.feelings).join(', ')}
        </div>
      </div>
    </div>
  )
}
