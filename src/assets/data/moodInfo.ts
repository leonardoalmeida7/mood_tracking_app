import iconVeryHappy from "../images/icon-very-happy-color.svg";
import iconHappy from "../images/icon-happy-color.svg";
import iconNeutral from "../images/icon-neutral-color.svg";
import iconSad from "../images/icon-sad-color.svg";
import iconVerySad from "../images/icon-very-sad-color.svg";

import iconVeryHappyWhite from "../images/icon-very-happy-white.svg";
import iconHappyWhite from "../images/icon-happy-white.svg";
import iconNeutralWhite from "../images/icon-neutral-white.svg";
import iconSadWhite from "../images/icon-sad-white.svg";
import iconVerySadWhite from "../images/icon-very-sad-white.svg";

type MoodInfo = {
  id: number;
  mood: string;
  icon: string;
  iconWhite: string;
  alt: string;
  color: string;
};

export const moodInfo: MoodInfo[] = [
  {
    id: 1,
    mood: "Very Happy",
    icon: iconVeryHappy,
    iconWhite: iconVeryHappyWhite,
    alt: "Very Happy Icon",
    color: "#FFC97C",
  },
  {
    id: 2,
    mood: "Happy",
    icon: iconHappy,
    iconWhite: iconHappyWhite,
    alt: "Happy Icon",
    color: "#89E780",
  },
  {
    id: 3,
    mood: "Neutral",
    icon: iconNeutral,
    iconWhite: iconNeutralWhite,
    alt: "Neutral Icon",
    color: "#89CAFF",
  },
  {
    id: 4,
    mood: "Sad",
    icon: iconSad,
    iconWhite: iconSadWhite,
    alt: "Sad Icon",
    color: "#B8B1FF",
  },
  {
    id: 5,
    mood: "Very Sad",
    icon: iconVerySad,
    iconWhite: iconVerySadWhite,
    alt: "Very Sad Icon",
    color: "#E60013",
  },
];

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
];

export const sleepOptions: string[] = [
  "9+ hours",
  "7-8 hours",
  "5-6 hours",
  "3-4 hours",
  "0-2 hours",
];

interface MoodQuotes {
  [key: number]: string[];
}

const moodQuotes: MoodQuotes = {
  1: [
    "You are stronger than you think; the storm will pass.",
    "It's okay to cry. Healing begins when you let your feelings flow.",
    "Even in darkness, a spark of hope can shine bright.",
    "This moment is tough, but you've overcome challenges before.",
    "A gentle step forward, no matter how small, is still progress.",
  ],
  2: [
    "Pain is temporary, brighter days lie ahead.",
    "Each setback is a chance to grow and learn.",
    "One small positive thought can change your entire day.",
    "It's okay to rest; self-care isn't selfish.",
    "Healing takes time - be patient and kind to yourself.",
  ],
  3: [
    "A calm mind can find opportunity in every moment.",
    "Sometimes the greatest triumph is simply finding peace.",
    "Take a moment to breathe; every breath is a fresh start.",
    "Even an ordinary day can hold a pleasant surprise.",
    "Balance isn't found, it's created.",
  ],
  4: [
    "Happiness grows when it's shared with others.",
    "Celebrate even the small victories to make life extraordinary.",
    "Gratitude can turn what you have into enough.",
    "Keep smiling; your joy can be contagious.",
    "Where focus goes, energy flows - keep your focus on what lifts you.",
  ],
  5: [
    "When your heart is full, share your light with the world.",
    "Savor the highs in life; they become precious memories.",
    "Joy multiplies when spread among friends.",
    "Trust your journey; you're in a beautiful place right now.",
    "Let your happiness ripple out and inspire others.",
  ],
};

export const getRandomMoodQuote = (moodId: number): string => {
  const quotes = moodQuotes[moodId];
  if (!quotes || quotes.length === 0) return "";
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
};