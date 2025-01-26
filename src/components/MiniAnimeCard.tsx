import { Link } from "react-router-dom";
import MiniAnime from "../types/MiniAnime";
import { FaStar } from "react-icons/fa";

export default function MiniAnimeCard({
  title,
  images,
  mal_id,
  score,
  rank,
}: MiniAnime) {
  return (
    <Link
      to={`/anime/details?id=${mal_id}`}
      className="flex flex-row items-center bg-red-700 hover:bg-red-600 transition-colors"
    >
      <img
        src={images.jpg.image_url}
        alt={title}
        className="rounded-lg m-2 border-2 object-cover border-gray-400"
        width={30}
        height={120}
      />
      <p className="text-sm text-white">
        {title.length > 20 ? title.slice(0, 20) + "..." : title}
      </p>
      <div className="flex flex-row pl-2 gap-2">
        <div className="flex flex-row items-center dark:bg-white rounded-full px-1.5">
          <p className="px-0.5 text-xs font-semibold dark:text-black">
            {score}
          </p>
          <FaStar className="text-yellow-400 text-base" />
        </div>
        <div className="flex flex-row items-center">
          <p className="dark:bg-white px-2 text-xs font-semibold rounded-full dark:text-black">
            {rank}#
          </p>
        </div>
      </div>
    </Link>
  );
}
