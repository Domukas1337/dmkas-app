import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"

import Anime from "../types/Anime"
import AnimeDetails from "../components/AnimeDetails"
import Loading from "../components/Loading"

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
        <div className="flex flex-row flex-wrap justify-center">
            {isLoading ? (
                <Loading />
            ) : (
                animeDetails && (
                    <AnimeDetails
                        anime={{
                            airingStatus: animeDetails.data.airingStatus,
                            images: animeDetails.data.images,
                            malId: animeDetails.data.malId,
                            rank: animeDetails.data.rank,
                            score: animeDetails.data.score,
                            scoredBy: animeDetails.data.scoredBy,
                            title: animeDetails.data.title,
                            titleJapanese: animeDetails.data.titleJapanese,
                            synopsis: animeDetails.data.synopsis,
                            genres: animeDetails.data.genres,
                            episodes: animeDetails.data.episodes,
                            type: animeDetails.data.type,
                            url: animeDetails.data.url,
                        }}
                    />
                )
            )}
        </div>
    );
}