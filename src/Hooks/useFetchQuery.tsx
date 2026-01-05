import { useQuery } from "@tanstack/react-query";
import { useLogMood } from "../contexts/LogMoodContext";
import { api } from "../services/api";

export const useFetchQuery = (url: string, key: string) => {
  const token = localStorage.getItem("token");
  const { concluided, step } = useLogMood();
  const { data, error, isLoading } = useQuery({
    queryKey: [key],
    queryFn: async () => {
      const response = await api.get(`mood/${url}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    },
    enabled: concluided === true || step === 1,
  });
  return { data, error, isLoading };
};
