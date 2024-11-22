import Anime from "../types/Anime";
import { FaStar } from "react-icons/fa";

export default function AnimeDetails({ anime }: { anime: Anime }) {
    return (
        <div className="text-white border-2 border-gray-400 rounded-lg mx-2">
            <div className="">
                <img src={anime.images.jpg.image_url} alt={anime.title} className="rounded-lg border-2 border-gray-400" />
            </div>
            <p>{anime.malId}</p>
            <div>
                  <h2 className="text-lg text-wrap">#{anime.rank}</h2>
                  <p className="text-lg text-gray-500 dark:text-gray-400">Ranking</p>
            </div>
            <div>
                <div className="flex flex-row items-center">
                  <h2 className="text-lg">{anime.score}</h2>
                  <FaStar className="text-yellow-400 text-lg pl-1"/>
                </div>
                <p className="text-lg text-gray-500 dark:text-gray-400">{anime.scored_by} users</p>
            </div>
            <div className="flex flex-row gap-2">
                {anime.genres && anime.genres.map((genre: any, index: number) => (
                    <p key={index} className="dark:bg-white px-2 text-sm rounded-full dark:text-black">{genre.name}</p>
                ))
                }
            </div>
            <div className={`border border-gray-400 rounded-full w-fit my-2 px-4 
                  ${anime.status === "Finished Airing" ? "bg-green-300 dark:bg-green-500" : 
                    anime.status === "Paused" ? "bg-yellow-300 dark:bg-yellow-500" : 
                    anime.status === "Not yet aired" ? "bg-red-300 dark:bg-red-500" : "bg-blue-300 dark:bg-blue-500"}`
                  }>
              <p className="text-center text-lg font-semibold">{anime.status}</p>
            </div>
            <p>{anime.title}</p>
            <p>{anime.title_japanese}</p>
            <p>{anime.synopsis}</p>
            <p>{anime.episodes}</p>
            <p>{anime.type}</p>
            <p>{anime.url}</p>
        </div>
    )
}