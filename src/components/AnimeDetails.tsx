import Anime from "../types/Anime";
import { FaStar } from "react-icons/fa";

export default function AnimeDetails({ anime }: { anime: Anime }) {
    return (
        <div className="text-white border-2 border-gray-400 rounded-lg mx-2">
            <div className="flex">
                <img src={anime.images.jpg.image_url} alt={anime.title} width={300} height={400} className="rounded-lg border-2 border-gray-400" />
                <div className="flex flex-col gap-2 m-2">
                    <div className="flex flex-row justify-between w-full">
                        <p className="text-3xl font-semibold">{anime.title}</p>
                        <div className={`border border-gray-400 rounded-full w-fit my-2 px-4 
                            ${anime.status === "Finished Airing" ? "bg-green-300 dark:bg-green-500" : 
                                anime.status === "Paused" ? "bg-yellow-300 dark:bg-yellow-500" : 
                                anime.status === "Not yet aired" ? "bg-red-300 dark:bg-red-500" : "bg-blue-300 dark:bg-blue-500"}`
                            }>
                            <p className="text-center text-lg font-semibold">{anime.status}</p>
                        </div>
                    </div>
                    <p className="text-xl text-gray-400">{anime.title_japanese}</p>
                    <div className="flex flex-row gap-2">
                        {anime.genres && anime.genres.map((genre: any, index: number) => (
                            <p key={index} className="dark:bg-white px-2 text-xl font-semibold rounded-full dark:text-black">{genre.name}</p>
                        ))
                        }
                    </div>
                    <div className="flex flex-row gap-2">
                        <div>
                            <h2 className="text-xl text-wrap">#{anime.rank}</h2>
                            <p className="text-xl text-gray-500 dark:text-gray-400">Ranking</p>
                        </div>
                        <div>
                            <div className="flex flex-row items-center">
                                <h2 className="text-xl">{anime.score}</h2>
                                <FaStar className="text-yellow-400 text-xl pl-1"/>
                            </div>
                            <p className="text-xl text-gray-500 dark:text-gray-400">{anime.scored_by} users</p>
                        </div>
                    </div>
                </div>
            </div>
            <p>{anime.malId}</p>
            
            <p>{anime.synopsis}</p>
            <p>{anime.episodes}</p>
            <p>{anime.type}</p>
            <p>{anime.url}</p>
        </div>
    )
}