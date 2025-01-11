import { Link } from "react-router-dom";
import Search from "../ui/Search";

export default function Navbar() {
  return (
    <nav className="flex flex-row items-center justify-between mx-2 bg-white dark:bg-black border-b shadow-lg">
      <Link
        to="/"
        className="text-xl font-semibold ml-2 px-2 py-4 text-black dark:text-white select-none hover:text-red-500"
      >
        DMKAS
      </Link>
      <Search />
      <div className="hidden sm:block px-2 rounded-md mr-4 text-gray-500 dark:text-white sm:text-base text-sm">
        v1.3a
      </div>
    </nav>
  );
}
