import { Link } from "react-router-dom";
import Search from "./Search";

export default function Navbar() {
  return (
    <nav className="fixed w-full flex flex-row items-center justify-between mx-2 backdrop-blur-3xl shadow-lg mt-2 rounded-lg z-50">
      <Link
        to="/"
        className="text-xl font-semibold ml-2 px-2 py-4 text-black dark:text-white select-none hover:text-red-500 transition-colors duration-200"
      >
        DMKAS
      </Link>
      <div className="z-40 mr-8 sm:mr-0">
        <Search />
      </div>
      <div className="hidden sm:block px-2 rounded-md mr-4 text-gray-500 dark:text-white sm:text-base text-sm">
        v1.0
      </div>
    </nav>
  );
}
