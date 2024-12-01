import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"

import Anime from "../types/Anime"
import AnimeDetails from "../components/AnimeDetails"
import Loading from "../ui/Loading"

export default function Details() {
    const [isLoading, setIsLoading] = useState(true)
    const [animeDetails, setAnimeDetails] = useState<{ data: Anime } | null>(null)
    
    const [searchParams] = useSearchParams()
    
    const id = searchParams.get('id')
    
    useEffect(() => {
        async function fetchAnime() {
            setIsLoading(true)
            const response = await fetch(`https://api.jikan.moe/v4/anime/${id}/full`)
            const data = await response.json()
            console.log(data.data)

            setAnimeDetails(data)
            setIsLoading(false)
        }

        fetchAnime()
    }, [id])

    console.log(animeDetails)

    return (
        <div className="w-screen p-2 fadein">
            {isLoading ? (
                <Loading />
            ) : (
                animeDetails && (
                    <AnimeDetails
                        anime={{
                            status: animeDetails.data.status,
                            images: animeDetails.data.images,
                            mal_id: animeDetails.data.mal_id,
                            rank: animeDetails.data.rank,
                            score: animeDetails.data.score,
                            scored_by: animeDetails.data.scored_by,
                            title: animeDetails.data.title,
                            title_japanese: animeDetails.data.title_japanese,
                            synopsis: animeDetails.data.synopsis,
                            genres: animeDetails.data.genres,
                            episodes: animeDetails.data.episodes,
                            trailer: animeDetails.data.trailer
                        }}
                    />
                )
            )}
        </div>
    );
}