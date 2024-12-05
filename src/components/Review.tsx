import { Link } from "react-router-dom";
import AnimeReviews from "../types/AnimeReviews";

export default function Review({ review }: { review: AnimeReviews }) {
    return (
        <Link to={review.user.url} className="text-white px-4 py-2 mt-4 hover:bg-gray-800 rounded-lg">
            <div className="flex flex-row items-center">
                <img src={review.user.images.jpg.image_url} alt={review.user.username} className="rounded-full h-12 w-12 object-cover border-2 border-gray-400" />
                <p className="pl-2">{review.user.username}</p>
            </div>
            <div className="flex flex-col justify-center items-center">
                <p className="dark:text-gray-300 ">{review.review}</p>
                <p className="sm:text-lg md:text-2xl dark:text-gray-300 ">Score: {review.score}</p>
                <p className="sm:text-lg md:text-2xl dark:text-gray-300 ">Tags: {review.tags.join(', ')}</p>
                <p className="sm:text-lg md:text-2xl dark:text-gray-300 ">Date: {review.date}</p>
            </div>
        </Link>

    )
}