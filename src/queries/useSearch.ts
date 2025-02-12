import { getAnime } from "../services/apiJikan";
import { useQuery } from "@tanstack/react-query";

export default function useAnime(query: string) {
  const { isLoading, error, data } = useQuery({
    queryKey: ["anime", query],
    queryFn: query.length > 3 ? () => getAnime(query) : undefined,
    enabled: !!query,
  });

  return { isLoading, error, data };
}
