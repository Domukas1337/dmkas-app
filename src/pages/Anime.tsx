import { useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { useState } from "react"

import AnimeCard from "../components/AnimeCard"
import Loading from "../components/Loading"

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

    console.log(animes)

    return (
        <div className="flex flex-row flex-wrap justify-center">
            {isLoading ? (
                <Loading />
            ) : (
                animes.map((anime: {
                    status: string
                    images: {
                        jpg: {
                            image_url: string
                        }
                    }
                    mal_id: number
                    rank: number
                    score: number
                    scored_by: number
                    title: string
                    title_japanese: string
                }) => (
                    <AnimeCard
                        anime={{
                            airingStatus: anime.status,
                            images: anime.images,
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