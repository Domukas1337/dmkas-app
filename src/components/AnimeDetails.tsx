import Anime from "../types/Anime";
import { FaStar } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function AnimeDetails({ anime }: { anime: Anime }) {
  return (
    <div className="flex flex-col lg:flex-row">
      <img
        src={anime.images.jpg.large_image_url}
        alt={anime.title}
        className="rounded-lg m-2 border-2 object-cover border-gray-400"
      />
      <div className="flex flex-col gap-2 m-2 w-full">
        <div className="flex flex-row w-full justify-between">
          <p className="lg:text-3xl text-2xl font-semibold text-white">
            {anime.title}
          </p>
        </div>
        <p className="text-xl text-gray-400">{anime.title_japanese}</p>
        <div className="flex flex-row gap-2">
          {anime.genres &&
            anime.genres.map((genre: any, index: number) => (
              <p
                key={index}
                className="dark:bg-white px-2 text-base font-semibold rounded-full dark:text-black"
              >
                {genre.name}
              </p>
            ))}
        </div>
        <div className="flex flex-row gap-2">
          <div>
            <h2 className="text-xl text-wrap text-white">#{anime.rank}</h2>
            <p className="text-xl text-gray-500 dark:text-gray-400">Ranking</p>
          </div>
          <div className="mx-10">
            <div className="flex flex-row items-center">
              <h2 className="text-xl text-white">{anime.score}</h2>
              <FaStar className="text-yellow-400 text-xl pl-1" />
            </div>
            <p className="text-xl text-gray-500 dark:text-gray-400">
              {anime.scored_by} users
            </p>
          </div>
        </div>
        <p className="text-xl text-gray-500 dark:text-gray-200">
          {anime.episodes} {anime.episodes === 1 ? "episode" : "episodes"}
        </p>
        <div
          className={`border justify-end rounded-md px-2 py-1 w-48 text-white
                        ${
                          anime.status === "Finished Airing"
                            ? "bg-green-300 dark:bg-green-500"
                            : anime.status === "Paused"
                            ? "bg-yellow-300 dark:bg-yellow-500"
                            : anime.status === "Not yet aired"
                            ? "bg-red-300 dark:bg-red-500"
                            : "bg-blue-300 dark:bg-blue-500"
                        }`}
        >
          <p className="text-center text-lg font-semibold">{anime.status}</p>
        </div>
        <p className="text-white pr-4">{anime.synopsis}</p>
        <div className="flex gap-2">
          {anime.trailer?.youtube_id === null ? null : (
            <Link
              to={
                "https://www.youtube.com/watch?v=" + anime.trailer?.youtube_id
              }
              target="_blank"
              className="w-8 p-2 rounded-lg bg-white hover:scale-105 transition-all duration-100"
            >
              <FaYoutube />
            </Link>
          )}
          <Link
            to={"https://x.com/search?q=" + anime.title}
            target="_blank"
            className="w-8 p-2 rounded-lg bg-white hover:scale-105 transition-all duration-100"
          >
            <FaSquareXTwitter />
          </Link>
          <Link
            to={"https://myanimelist.net/anime/" + anime.mal_id}
            target={"_blank"}
            className="flex justify-center items-center font-bold text-center w-8 rounded-lg bg-white text-sm hover:scale-105 transition-all duration-100"
          >
            mAl
          </Link>
        </div>
        <p className="text-white">MyAnimeList ID: {anime.mal_id}</p>
      </div>
    </div>
  );
}
