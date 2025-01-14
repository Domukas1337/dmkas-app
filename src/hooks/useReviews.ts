import { getReviews } from "../services/apiJikan";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export default function useReviews({ id, page }: { id: number; page: number }) {
  const queryClient = useQueryClient();
  const { isLoading, error, data } = useQuery({
    queryKey: ["reviews", id, page],
    queryFn: () => getReviews(id, page),
  });

  const hasNextPage = data?.pagination.has_next_page ?? false;

  // pre-fetch next page
  if (hasNextPage) {
    queryClient.prefetchQuery({
      queryKey: ["reviews", id, page + 1],
      queryFn: () => getReviews(id, page + 1),
    });
  }

  return { isLoading, error, reviews: data?.data, hasNextPage };
}
