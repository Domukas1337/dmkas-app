import { useEffect, useState } from "react"

import AnimeDetails from "../components/AnimeDetails"
import Review from "../components/Review"
import Loading from "../ui/Loading"

import Anime from "../types/Anime"
import AnimeReviews from "../types/AnimeReviews"

export default function RandomAnime() {
    const [isLoading, setIsLoading] = useState(true)
    const [animeDetails, setAnimeDetails] = useState<{ data: Anime } | null>(null)
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        async function fetchAnime() {
            setIsLoading(true)
            const response = await fetch(`https://api.jikan.moe/v4/random/anime`)
            const data = await response.json()
            console.log(data)

            const id = data.data.mal_id

            const responseReviews = await fetch(`https://api.jikan.moe/v4/anime/${id}/reviews`)
            const dataReviews = await responseReviews.json()
            console.log(dataReviews.data)

            setReviews(dataReviews.data)

            setAnimeDetails(data)
            setIsLoading(false)
        }

        fetchAnime()
    }, [])

    console.log(animeDetails)

    return (
        <div className="m-2 sm:m-4 md:m-6 fadein border-2 border-gray-400 rounded-lg">
            {isLoading ? (
                <Loading />
            ) : (
                animeDetails && (
                    <>
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
                        <div className="flex flex-col p-2">
                            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold dark:text-white text-center">Reviews</h1>
                            {reviews && reviews.map((review: AnimeReviews, index: number) => (
                                <Review key={index} review={review} />
                            ))}
                        </div>
                    </>
                )
            )}
        </div>
    )
}