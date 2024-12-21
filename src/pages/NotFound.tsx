import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold dark:text-white">
        404
      </h1>
      <p className="sm:text-lg md:text-2xl dark:text-gray-300 ">
        Page not found
      </p>
      <Link
        to="/"
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md mt-4"
      >
        Go back
      </Link>
    </div>
  );
}
