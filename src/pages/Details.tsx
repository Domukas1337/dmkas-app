import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";

import Anime from "../types/Anime";
import AnimeReviews from "../types/AnimeReviews";

import AnimeDetails from "../components/AnimeDetails";
import Loading from "../ui/Loading";
import Review from "../components/Review";

export default function Details({ random = false }: { random: boolean }) {
  const [isLoading, setIsLoading] = useState(true);
  const [animeDetails, setAnimeDetails] = useState<{ data: Anime } | null>(
    null
  );
  const [reviews, setReviews] = useState([]);

  const [searchParams] = useSearchParams();

  const id = searchParams.get("id");

  if (!random && !id) {
    return (
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold dark:text-white">
          Something went wrong.
        </h1>
        <p className="sm:text-lg md:text-2xl dark:text-gray-300">
          Please try again.
        </p>
        <Link
          to="/"
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md mt-4"
        >
          Home
        </Link>
      </div>
    );
  }

  useEffect(() => {
    async function fetchAnimeAndReviews() {
      setIsLoading(true);
      if (random) {
        const responseDetails = await fetch(
          `https://api.jikan.moe/v4/random/anime`
        );
        const data = await responseDetails.json();
        const id = data.data.mal_id;

        setAnimeDetails(data);

        const responseReviews = await fetch(
          `https://api.jikan.moe/v4/anime/${id}/reviews`
        );
        const dataReviews = await responseReviews.json();

        setReviews(dataReviews.data);

        setIsLoading(false);
      } else {
        // fetch details
        const responseDetails = await fetch(
          `https://api.jikan.moe/v4/anime/${id}/full`
        );
        const dataDetails = await responseDetails.json();

        setAnimeDetails(dataDetails);

        // fetch reviews
        const responseReviews = await fetch(
          `https://api.jikan.moe/v4/anime/${id}/reviews`
        );
        const dataReviews = await responseReviews.json();

        setReviews(dataReviews.data);

        setIsLoading(false);
      }
    }

    fetchAnimeAndReviews();
  }, [id]);

  return (
    <div
      className={`m-2 sm:m-4 md:m-6 fadein ${
        isLoading ? "" : "border-gray-400 border-2"
      } rounded-lg`}
    >
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
                trailer: animeDetails.data.trailer,
              }}
            />
            <div className="flex flex-col p-2">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold dark:text-white text-center">
                Reviews
              </h1>
              {reviews &&
                reviews.map((review: AnimeReviews, index: number) => (
                  <Review key={index} review={review} />
                ))}
              {reviews.length === 0 && (
                <h3 className="sm:text-lg md:text-2xl dark:text-gray-300 text-center">
                  No reviews found
                </h3>
              )}
            </div>
            <div className="flex flex-col p-2">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold dark:text-white text-center">
                Want to know more about this anime?
              </h3>
              <Link
                to={`https://myanimelist.net/anime/${animeDetails.data.mal_id}`}
                className="sm:text-lg md:text-xl dark:text-gray-300 underline text-center hover:text-white"
              >
                Click here
              </Link>
            </div>
          </>
        )
      )}
    </div>
  );
}
