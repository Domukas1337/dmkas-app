import { getAnimeDetails } from "../services/apiJikan";
import { useQuery } from "@tanstack/react-query";

export default function useAnimeDetails({
  id,
  random,
}: {
  id?: number;
  random?: boolean;
}) {
  const { isLoading, error, data } = useQuery({
    queryKey: ["animeDetails"],
    queryFn: () => getAnimeDetails({ id, random }),
  });

  return { isLoading, error, data };
}
