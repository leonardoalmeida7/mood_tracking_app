import iconVeryHappy from "../images/icon-very-happy-color.svg";
import iconHappy from "../images/icon-happy-color.svg";
import iconNeutral from "../images/icon-neutral-color.svg";
import iconSad from "../images/icon-sad-color.svg";
import iconVerySad from "../images/icon-very-sad-color.svg";


type MoodInfo = {
  mood: string;
  icon: string;
  alt: string;
};

export const moodInfo: MoodInfo[] = [
    { mood: "Very Happy", icon: iconVeryHappy, alt: "Very Happy Icon" },
    { mood: "Happy", icon: iconHappy, alt: "Happy Icon" },
    { mood: "Neutral", icon: iconNeutral, alt: "Neutral Icon" },
    { mood: "Sad", icon: iconSad, alt: "Sad Icon" },
    { mood: "Very Sad", icon: iconVerySad, alt: "Very Sad Icon" },
]

export const feelsTags: string[] = [
  "Joyful",
  "Down",
  "Anxious",
  "Calm",
  "Excited",
  "Frustrated",
  "Lonely",
  "Grateful",
  "Overwhelmed",
  "Motivated",
  "Irritable",
  "Peaceful",
  "Tired",
  "Hopeful",
  "Confident",
  "Stressed",
  "Content",
  "Disappointed",
  "Optimistic",
  "Restless",
]