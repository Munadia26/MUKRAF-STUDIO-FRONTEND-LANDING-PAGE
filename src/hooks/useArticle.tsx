import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useArticles = () => {
  return useQuery({
    queryKey: ["articles"],
    queryFn: async () => {
      const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/articles`);
      return data.data;
    },
  });
};