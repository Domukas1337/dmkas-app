import { useSearchParams } from "react-router-dom";
import { getAnime } from "../services/apiJikan";
import { useQuery } from "@tanstack/react-query";

export default function useAnime() {
    const [searchParams] = useSearchParams();

    const query = searchParams.get("q") || "";

    const {isLoading, error, data} = useQuery({
        queryKey: ["anime"],
        queryFn: () => getAnime(query),
    })

    return {isLoading, error, data}
}