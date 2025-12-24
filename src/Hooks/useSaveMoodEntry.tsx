import { toast } from "react-toastify";
import { api } from "../services/api";

export interface MoodEntryData {
  mood: string;
  feelings: string[];
  notes: string;
  sleepHours: string;
}

export const useSaveMoodEntry = () => {
  const saveMoodEntry = async (data: MoodEntryData) => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("You must be logged in to save your mood entry.");
      return;
    }
    try {
      const res = await api.post("mood/create", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Mood entry saved successfully!");
      return res.data;
    } catch (err) {
      console.error(err);
      toast.error("Failed to save mood entry.");
      return null;
    }
  };

  return { saveMoodEntry };
};
