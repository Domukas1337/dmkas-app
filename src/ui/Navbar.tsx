import { Link } from "react-router-dom";
import Search from "../components/Search";

export default function Navbar() {
  return (
    <div className="flex flex-row items-center mx-2 mt-2 border-gray-400 bg-white dark:bg-black border rounded-full shadow-lg">
      <Link to="/" className="text-xl font-semibold ml-2 px-2 py-4 text-black dark:text-white">DMKAS</Link>
      <Search />
    </div>
  )
}