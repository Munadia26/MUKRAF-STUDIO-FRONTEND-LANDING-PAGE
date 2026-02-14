import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useMembers = () => {
  return useQuery({
    queryKey: ["members"],
    queryFn: async () => {
      const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/member`);
      return data.data;
    },
  });
};