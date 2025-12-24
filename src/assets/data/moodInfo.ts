import iconVeryHappy from "../images/icon-very-happy-color.svg";
import iconHappy from "../images/icon-happy-color.svg";
import iconNeutral from "../images/icon-neutral-color.svg";
import iconSad from "../images/icon-sad-color.svg";
import iconVerySad from "../images/icon-very-sad-color.svg";


type MoodInfo = {
  id: number;
  mood: string;
  icon: string;
  alt: string;
};

export const moodInfo: MoodInfo[] = [
    { id: 1, mood: "Very Happy", icon: iconVeryHappy, alt: "Very Happy Icon" },
    { id: 2, mood: "Happy", icon: iconHappy, alt: "Happy Icon" },
    { id: 3, mood: "Neutral", icon: iconNeutral, alt: "Neutral Icon" },
    { id: 4, mood: "Sad", icon: iconSad, alt: "Sad Icon" },
    { id: 5, mood: "Very Sad", icon: iconVerySad, alt: "Very Sad Icon" },
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

export const sleepOptions: string[] = [
  "9+ hours",
  "7-8 hours",
  "5-6 hours",
  "3-4 hours",
  "0-2 hours",
]