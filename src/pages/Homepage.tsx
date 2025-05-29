import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div className="homepage-intro p-10 ">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold dark:text-white">
          Welcome to <span className="text-red-500">DMKAS</span>
        </h1>
        <p className="sm:text-lg md:text-2xl dark:text-gray-300 ">
          Start by <span className="text-red-500">searching</span> for an{" "}
          <span className="text-red-500">anime</span>
        </p>
        <p className="sm:text-lg md:text-2xl dark:text-gray-300 ">
          or use the <span className="text-red-500">random</span> button
        </p>
        <Link
          to="/anime/random"
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md mt-4 transition-colors duration-200"
        >
          Random
        </Link>
      </div>
    </div>
  );
}
