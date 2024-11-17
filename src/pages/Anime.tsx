import { useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { useState } from "react"

import AnimeCard from "../components/AnimeCard"

export default function Anime() {
    const [isLoading, setIsLoading] = useState(true)
    const [animes, setAnimes] = useState([])

    const [searchParams] = useSearchParams()

    const anime = searchParams.get('q')

    useEffect(() => {
        async function fetchAnime() {
            setIsLoading(true)
            const response = await fetch(`https://api.jikan.moe/v4/anime?q=${anime}`)
            const data = await response.json()
            console.log(data)

            setAnimes(data.data)
            setIsLoading(false)
        }

        fetchAnime()
    }, [anime])

    return (
        <div className="flex flex-row flex-wrap justify-center">
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                animes.map((anime) => (
                    <AnimeCard
                        anime={{
                            airingStatus: anime.status,
                            image: anime.images.jpg.image_url,
                            malId: anime.mal_id,
                            rank: anime.rank,
                            score: anime.score,
                            scoredBy: anime.scored_by,
                            title: anime.title,
                            titleJapanese: anime.title_japanese,
                        }}
                    />
                ))
            )}
        </div>
    )
}