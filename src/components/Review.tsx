import { Link } from "react-router-dom";
import AnimeReviews from "../types/AnimeReviews";

export default function Review({ review }: { review: AnimeReviews }) {
    return (
        <div className="text-white px-4 py-2 mt-4">
            <Link to={review.user.url} className="flex flex-row items-center w-fit hover:bg-gray-700 rounded-md px-2 py-2">
                <img src={review.user.images.jpg.image_url} alt={review.user.username} className="rounded-full h-12 w-12 object-cover border-2 border-gray-400" />
                <p className="pl-2">{review.user.username}</p>
            </Link>
            <p className="dark:text-gray-300 ">{review.review}</p>
            <div className="flex flex-row justify-between items-center mt-1.5">
                <p className="sm:text-lg md:text-2xl font-bold">Score: {review.score}</p>
                <p className="sm:text-lg md:text-2xl dark:text-gray-300 ">Date: {review.date.split('T')[0]}</p>
            </div>
        </div>

    )
}