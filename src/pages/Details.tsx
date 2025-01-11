import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

import Anime from "../types/Anime";
import AnimeReviews from "../types/AnimeReviews";

import AnimeDetails from "../components/AnimeDetails";
import Loading from "../components/Loading";
import Review from "../components/Review";

export default function Details({ random = false }: { random?: boolean }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingReviews, setIsLoadingReviews] = useState(false);
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);
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
        if (!responseDetails.ok) {
          setIsLoading(false);
          toast.error("Page doesn't exist.");
        }

        const data = await responseDetails.json();
        const id = data.data.mal_id;

        setAnimeDetails(data);

        const responseReviews = await fetch(
          `https://api.jikan.moe/v4/anime/${id}/reviews`
        );

        if (!responseReviews.ok) {
          setIsLoading(false);
          toast.error("Reviews not found.");
        }

        const dataReviews = await responseReviews.json();

        console.log(dataReviews.pagination.has_next_page);

        if (dataReviews.pagination.has_next_page === true) {
          setHasNextPage(true);
        } else {
          setHasNextPage(false);
        }

        setReviews(dataReviews.data);

        setIsLoading(false);
      } else {
        // fetch details
        const responseDetails = await fetch(
          `https://api.jikan.moe/v4/anime/${id}/full`
        );
        if (!responseDetails.ok) {
          setIsLoading(false);
          toast.error("Page doesn't exist.");
        }
        const dataDetails = await responseDetails.json();

        setAnimeDetails(dataDetails);

        // fetch reviews
        const responseReviews = await fetch(
          `https://api.jikan.moe/v4/anime/${id}/reviews`
        );
        if (!responseReviews.ok) {
          setIsLoading(false);
          toast.error("Reviews not found.");
        }
        const dataReviews = await responseReviews.json();

        console.log(dataReviews.pagination.has_next_page);

        if (dataReviews.pagination.has_next_page === true) {
          setHasNextPage(true);
        } else {
          setHasNextPage(false);
        }

        setReviews(dataReviews.data);

        setIsLoading(false);
      }
    }

    fetchAnimeAndReviews();
  }, [id]);

  async function fetchReviews({ page }: { page: number }) {
    setIsLoadingReviews(true);
    const response = await fetch(
      `https://api.jikan.moe/v4/anime/${id}/reviews?page=${page}`
    );
    // if response is not ok, throw error and set next page to false
    // it will hide the next page button after clicking it
    if (!response.ok) {
      setHasNextPage(false);
      setIsLoadingReviews(false);
      toast.error("Next page doesn't exist.");
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    console.log(data.pagination.has_next_page);

    if (data.pagination.has_next_page === true) {
      setHasNextPage(true);
    } else {
      setHasNextPage(false);
    }

    if (data.data.length > 0) {
      setReviews(data.data);
      setPage(page);
      setHasNextPage(data.pagination.has_next_page);
    } else {
      setHasNextPage(false);
      toast.error("Next page doesn't exist.");
    }
    setIsLoadingReviews(false);
  }

  return (
    <div className="m-2 sm:m-4 md:m-6 fadein">
      {isLoading ? (
        <Loading />
      ) : (
        animeDetails && (
          <div className="pop-up border border-gray-400 rounded-lg">
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
                reviews.map((review: AnimeReviews, index: number) => (
                  <Review key={index} review={review} />
                ))
              )}
              {reviews.length === 0 && (
                <h3 className="sm:text-lg md:text-2xl dark:text-gray-300 text-center">
                  No reviews found
                </h3>
              )}
            </div>
            {reviews.length > 0 && (
              <div className="flex justify-center p-2 text-white">
                <ul className="flex flex-row gap-2">
                  {page > 3 && (
                    <>
                      <button
                        className="sm:text-lg md:text-2xl dark:text-gray-300 cursor-pointer"
                        onClick={() => fetchReviews({ page: 1 })}
                      >
                        1
                      </button>
                      <span>...</span>
                    </>
                  )}
                  {page > 1 && (
                    <button
                      className="sm:text-lg md:text-2xl dark:text-gray-300 cursor-pointer"
                      onClick={() => fetchReviews({ page: page - 1 })}
                    >
                      {page - 1}
                    </button>
                  )}
                  <button
                    className="sm:text-lg md:text-2xl dark:text-black dark:bg-white px-2 rounded-lg cursor-pointer"
                    onClick={() => fetchReviews({ page: page })}
                  >
                    {page}
                  </button>
                  <button
                    className={`sm:text-lg md:text-2xl ${
                      hasNextPage ? "dark:text-gray-300" : "hidden"
                    }`}
                    onClick={() =>
                      hasNextPage && fetchReviews({ page: page + 1 })
                    }
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
