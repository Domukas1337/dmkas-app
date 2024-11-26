import { Link } from "react-router-dom";
import Anime from "../types/Anime";
import { FaStar } from "react-icons/fa";

export default function AnimeCard({ anime }: { anime: Anime }) {
  return (
    <Link to={`/anime/details?id=${anime.mal_id}`} className="hover:scale-105 transition-all duration-200">
      <div className="flex flex-row border border-gray-400 rounded-lg shadow-lg w-96 h-48 p-2 m-2 dark:text-white">
        <img src={anime.images.jpg.image_url} alt={anime.title} width={120} height={180} className="rounded-lg mr-2 object-cover"/>
        <div className="flex flex-col">
          <div className="">
              {anime.title.length > 20 && (
                  <h2 className="text-lg font-semibold">{anime.title.slice(0, 22)}...</h2>
              )}
              {anime.title.length <= 20 && (
                  <h2 className="text-lg font-semibold">{anime.title}</h2>
              )}
              <p className="text-sm text-gray-500 dark:text-gray-400">{anime.title_japanese}</p>
          </div>
          <div className="flex flex-row gap-2">
              <div>
                  <h2 className="text-sm text-wrap">#{anime.rank}</h2>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Ranking</p>
              </div>
              <div>
                <div className="flex flex-row items-center">
                  <h2 className="text-sm">{anime.score}</h2>
                  <FaStar className="text-yellow-400 text-lg pl-1"/>
                </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{anime.scored_by} users</p>
              </div>
          </div>
          <div className={`rounded-full w-fit my-2 px-2 
                  ${anime.status === "Finished Airing" ? "bg-green-300 dark:bg-green-500" : 
                    anime.status === "Paused" ? "bg-yellow-300 dark:bg-yellow-500" : 
                    anime.status === "Not yet aired" ? "bg-red-300 dark:bg-red-500" : "bg-blue-300 dark:bg-blue-500"}`
                  }>
              <p className="text-center text-sm">{anime.status}</p>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">MAL ID: {anime.mal_id}</p>
        </div>
      </div>
    </Link>
  );
}