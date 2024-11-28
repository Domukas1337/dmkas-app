import { Link } from "react-router-dom";
import Search from "../components/Search";

export default function Navbar() {
  return (
    <div className="flex flex-row items-center justify-between mx-2 border-gray-400 bg-white dark:bg-black border-b shadow-lg">
      <Link to="/" className="text-xl font-semibold ml-2 px-2 py-4 text-black dark:text-white">DMKAS</Link>
      <Search />
      <div className="bg-gray-800 px-2 rounded-md mr-4 text-gray-500 dark:text-white sm:text-base text-sm">
        v1.0a
      </div>
    </div>
  )
}