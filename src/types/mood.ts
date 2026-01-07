export interface MoodEntry {
  id: number;
  userId: number;
  mood: string;
  feelings: string[];
  notes: string;
  sleepHours: string;
  entryDate: string;
  createdAt: string;
  updatedAt: string;
}

export interface MoodApiResponse {
  message: string;
  data: MoodEntry[];
}