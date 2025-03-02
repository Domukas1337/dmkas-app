import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="flex justify-center items-center mx-2 bg-white mb-2 dark:bg-black shadow-lg">
      <Link to={"https://github.com/Domukas1337"}>
        <h1 className="text-white hover:text-red-500 transition-colors duration-200">
          &copy; {new Date().getFullYear()} DMKAS
        </h1>
      </Link>
    </footer>
  );
}
