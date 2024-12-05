import { Link } from "react-router-dom";
import AnimeReviews from "../types/AnimeReviews";

export function Review({ review }: { review: AnimeReviews }) {
    return (
        <Link to={review.data.user.url} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md mt-4">
            <div>
                <img src={review.data.user.images.jpg.image_url} alt={review.data.user.username} className="rounded-full h-12 w-12 object-cover border-2 border-gray-400" />
            </div>
            <div>
                {review.data.is_spoiler && (
                    <p className="sm:text-lg md:text-2xl dark:text-gray-300 ">Contains Spoiles!!!</p>
                )}
            </div>
            <div className="flex flex-col justify-center items-center">
                <p className="sm:text-lg md:text-2xl dark:text-gray-300 ">{review.data.review}</p>
                <p className="sm:text-lg md:text-2xl dark:text-gray-300 ">Score: {review.data.score}</p>
                <p className="sm:text-lg md:text-2xl dark:text-gray-300 ">Tags: {review.data.tags.join(', ')}</p>
                <p className="sm:text-lg md:text-2xl dark:text-gray-300 ">Date: {review.data.date}</p>
            </div>
        </Link>

    )
}