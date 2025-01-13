import { useEffect } from "react";
import { useState } from "react";

import AnimeCard from "../components/AnimeCard";
import Loading from "../components/Loading";
import useAnime from "../hooks/useAnime";
import Anime from "../types/Anime";

export default function AnimePage() {
  const [animes, setAnimes] = useState<Anime[]>([]);

  const { isLoading, error, data } = useAnime();

  useEffect(() => {
    if (data) {
      setAnimes(data as Anime[]);
    } else {
      setAnimes([]);
    }
  }, [data]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <h1
        className={`text-xl text-white mt-4 mb-2.5 ${
          isLoading ? "hidden" : "fadein"
        }`}
      >
        {animes.length > 0
          ? `Found results: ${animes.length}`
          : "No results found"}
      </h1>
      <div className="flex flex-row flex-wrap justify-center">
        {isLoading ? (
          <Loading />
        ) : (
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
