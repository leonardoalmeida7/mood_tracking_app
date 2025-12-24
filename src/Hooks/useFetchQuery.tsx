import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useLogMood } from "../contexts/LogMoodContext";
import { api } from "../services/api";

export const useFetchQuery = (url: string) => {
    const token = localStorage.getItem("token");
  const { concluided } = useLogMood();

  const { data, error, isLoading } = useQuery({
    queryKey: ["fetchData"],
    queryFn: async () => {
      const response = await api.get(`mood/${url}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
      return response.data;
    }
  });
  return { data, error, isLoading };
};
