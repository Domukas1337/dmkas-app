import { Link } from "react-router-dom";
import AnimeReviews from "../types/AnimeReviews";
import { useState } from "react";

const scoreClasses = [
  { score: 1, className: "text-red-500" },
  { score: 2, className: "text-yellow-500" },
  { score: 3, className: "text-yellow-400" },
  { score: 4, className: "text-yellow-300" },
  { score: 5, className: "text-yellow-200" },
  { score: 6, className: "text-yellow-100" },
  { score: 7, className: "text-green-100" },
  { score: 8, className: "text-green-200" },
  { score: 9, className: "text-green-300" },
  { score: 10, className: "text-green-400" },
];

export default function Review({ review }: { review: AnimeReviews }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="text-white px-4 py-2 mt-4">
      <Link
        to={review.user.url}
        className="flex flex-row items-center w-fit hover:bg-gray-700 rounded-md px-2 py-2 transition-all"
      >
        <img
          src={review.user.images.jpg.image_url}
          alt={review.user.username}
          className="rounded-full h-12 w-12 object-cover border-2 border-gray-400"
        />
        <p className="pl-2">{review.user.username}</p>
      </Link>
      {showMore ? (
        <p className="dark:text-gray-300">{review.review}</p>
      ) : (
        <p className="dark:text-gray-300">{review.review.slice(0, 350)}...</p>
      )}
      {review.review.length > 350 && !showMore ? (
        <div className="flex flex-row justify-start">
          <p
            className="dark:text-white text-lg cursor-pointer hover:text-red-300 transition-colors duration-150"
            onClick={() => setShowMore(true)}
          >
            Show more
          </p>
        </div>
      ) : (
        <p
          className="dark:text-white text-lg cursor-pointer hover:text-red-300 transition-colors duration-150"
          onClick={() => setShowMore(false)}
        >
          Show less
        </p>
      )}
      <div className="flex flex-row justify-between items-center mt-1.5">
        <p
          className={`sm:text-lg md:text-2xl font-bold ${
            scoreClasses.find((scoreClass) => scoreClass.score === review.score)
              ?.className ?? "text-gray-500"
          }`}
        >
          Score: {review.score}
        </p>
        <p className="text-base dark:text-gray-300 ">
          {review.date.split("T")[0]}
        </p>
      </div>
    </div>
  );
}
