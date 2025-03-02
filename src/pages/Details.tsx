import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
// import toast from "react-hot-toast";

import Anime from "../types/Anime";
import AnimeReviews from "../types/AnimeReviews";

import AnimeDetails from "../components/AnimeDetails";
import Loading from "../ui/Loading";
import Review from "../components/Review";
import useReviews from "../queries/useReviews";
import useAnimeDetails from "../queries/useAnimeDetails";

export default function Details({ random = false }: { random?: boolean }) {
  const [page, setPage] = useState(1);
  const [animeDetails, setAnimeDetails] = useState<{ data: Anime } | null>(
    null
  );
  const [reviews, setReviews] = useState<AnimeReviews[]>([]);
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

  const {
    isLoading: isLoadingDetails,
    error: errorDetails,
    data,
  } = useAnimeDetails({
    id: Number(id),
    random,
  });

  useEffect(() => {
    if (!isLoadingDetails) {
      setAnimeDetails(data!);
    }
  }, [data, isLoadingDetails]);

  if (errorDetails) {
    return (
      <div>
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold dark:text-white">
          Failed to fetch details.
        </h1>
        <p className="sm:text-lg md:text-2xl dark:text-gray-300">
          Refresh the page to try again.
        </p>
      </div>
    );
  }

  const {
    isLoading: isLoadingReviews,
    error: errorReviews,
    reviews: fetchedReviews,
    hasNextPage,
  } = useReviews({
    id: Number(id),
    page,
  });

  useEffect(() => {
    if (!isLoadingReviews) {
      setReviews(fetchedReviews!);
    }
  }, [isLoadingReviews, fetchedReviews]);

  return (
    <div className="m-2 sm:m-4 md:m-6">
      {isLoadingDetails ? (
        <Loading />
      ) : (
        animeDetails &&
        animeDetails.data && (
          <div className="pop-up border border-gray-400 rounded-lg fadein">
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
              {isLoadingReviews ? (
                <div className="my-7">
                  <Loading />
                </div>
              ) : (
                reviews &&
                !errorReviews &&
                reviews.map((review: AnimeReviews, index: number) => (
                  <div className="homepage-intro" key={index}>
                    <Review review={review} key={index} />
                  </div>
                ))
              )}
              {reviews.length === 0 && !isLoadingReviews && (
                <h3 className="sm:text-lg md:text-2xl dark:text-gray-300 text-center">
                  No reviews found
                </h3>
              )}
              {errorReviews && (
                <h3 className="sm:text-lg md:text-2xl dark:text-gray-300 text-center">
                  Failed to fetch reviews
                </h3>
              )}
            </div>
            {reviews.length > 0 && !errorReviews && (
              <div className="flex justify-center p-2 text-white">
                <ul className="flex flex-row gap-2">
                  {page > 3 && (
                    <>
                      <button
                        className="sm:text-lg md:text-2xl dark:text-gray-300 cursor-pointer"
                        onClick={() => setPage(1)}
                      >
                        1
                      </button>
                      <span>...</span>
                    </>
                  )}
                  {page > 1 && (
                    <button
                      className="sm:text-lg md:text-2xl dark:text-gray-300 cursor-pointer"
                      onClick={() => setPage(page - 1)}
                    >
                      {page - 1}
                    </button>
                  )}
                  <button
                    className="sm:text-lg md:text-2xl dark:text-black dark:bg-white px-2 rounded-lg cursor-pointer"
                    onClick={() => setPage(page)}
                  >
                    {page}
                  </button>
                  <button
                    className={`sm:text-lg md:text-2xl ${
                      hasNextPage ? "dark:text-gray-300" : "hidden"
                    }`}
                    onClick={() => setPage(page + 1)}
                  >
                    {page + 1}
                  </button>
                </ul>
              </div>
            )}
          </div>
        )
      )}
    </div>
  );
}
