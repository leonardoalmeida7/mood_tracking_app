import { sleepOptions } from "../../assets/data/moodInfo"
import { HoursOptions } from "../HoursOptions"
import { useLogMood } from "../../contexts/LogMoodContext"


export const HoursLastNight = () => {
  const { hoursLastNight, setHoursLastNight } = useLogMood()
  return (
    <div>
      <h2 className='text-start mb-4'>How many hours did you sleep last night?</h2>
      <div>
        {sleepOptions.map((option) => (
            <HoursOptions key={option} label={option} selected={hoursLastNight === option} onClick={() => setHoursLastNight(option)} />
        ))}
      </div>
    </div>
  )
}

