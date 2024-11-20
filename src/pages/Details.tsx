import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import Loading from "../components/Loading"

export default function Details() {
    const [searchParams] = useSearchParams()
    const [isLoading, setIsLoading] = useState(false)
    const [animeDetails, setAnimeDetails] = useState([])

    const id = searchParams.get("id")
    
    useEffect(() => {
        async function fetchAnime() {
            setIsLoading(true)
            const response = await fetch(`https://api.jikan.moe/v4/anime/${id}/full`)
            const data = await response.json()
            console.log(data)

            setAnimeDetails(data.data)
            setIsLoading(false)
        }

        fetchAnime()
    }, [id])

    return (
        <div>
            {isLoading ? (
                <Loading />
            ) : (
                null
            )}
        </div>
    )
}