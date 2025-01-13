import { getReviews } from "../services/apiJikan";
import { useQuery } from "@tanstack/react-query";

export default function useReviews({id, page}: {id: number, page: number}) {
    const {isLoading, error, data} = useQuery({
        queryKey: ["reviews"],
        queryFn: () => getReviews(id, page),
    })

    return {isLoading, error, data}
}