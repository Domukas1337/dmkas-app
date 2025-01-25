import { useEffect } from "react";
import { useState } from "react";

import AnimeCard from "../components/AnimeCard";
import Loading from "../components/Loading";
import useAnime from "../queries/useAnime";
import Anime from "../types/Anime";

export default function AnimePage() {
  const [animes, setAnimes] = useState<Anime[]>([]);

  const { isLoading, error, data } = useAnime();

  useEffect(() => {
    if (data) {
      setAnimes(data! as Anime[]);
    } else {
      setAnimes([]);
    }
  }, [data]);

  function sortByRating() {
    const sortedAnimes = [...animes];
    sortedAnimes.sort((a, b) => b.score - a.score);
    setAnimes(sortedAnimes);
  }

  function sortByTitle() {
    const sortedAnimes = [...animes];
    sortedAnimes.sort((a, b) => a.title.localeCompare(b.title));
    setAnimes(sortedAnimes);
  }

  function sortByDefault() {
    setAnimes(data! as Anime[]);
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <div
        className={`flex flex-row justify-between items-center w-screen px-10 gap-10 mt-4 ${
          isLoading ? "hidden" : "fadein"
        }`}
      >
        <p className=" text-white">{animes.length} results</p>
        <div className="flex gap-10">
          <select
            name="sortBy"
            className="px-4 py-2 rounded-lg bg-white cursor-pointer"
          >
            <option value="default" onClick={sortByDefault}>
              Relevant
            </option>
            <option value="rating" onClick={sortByRating}>
              Rating
            </option>
            <option value="title" onClick={sortByTitle}>
              Title
            </option>
          </select>
        </div>
      </div>
      <div className="flex flex-row flex-wrap justify-center">
        {isLoading ? (
          <Loading />
        ) : (
          animes &&
          animes.map((anime: Anime) => (
            <AnimeCard
              anime={{
                status: anime.status,
                images: anime.images,
                mal_id: anime.mal_id,
                rank: anime.rank,
                score: anime.score,
                scored_by: anime.scored_by,
                title: anime.title,
                title_japanese: anime.title_japanese,
              }}
              key={anime.mal_id}
            />
          ))
        )}
      </div>
    </div>
  );
}
