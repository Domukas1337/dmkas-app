import { getAnime } from "../services/apiJikan";
import { useQuery } from "@tanstack/react-query";

export default function useAnime(query: string) {
  const { isLoading, error, data } = useQuery({
    queryKey: ["anime", query],
    queryFn: () => getAnime(query),
    enabled: !!query,
  });

  return { isLoading, error, data };
}
