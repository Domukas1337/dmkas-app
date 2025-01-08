import { useState } from "react";
import { Link } from "react-router-dom";

export default function Search() {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <div
      className={`flex flex-row justify-center items-center border-2 hover:border-red-500 ${
        searchValue ? "bg-red-300 dark:bg-red-700" : "bg-black"
      } border-gray-400 rounded-full transition-all duration-200`}
    >
      <input
        type="text"
        placeholder="Search..."
        className="px-4 py-2 sm:w-96 w-48 rounded-full z-10 outline-none shadow-md dark:bg-black dark:text-white"
        value={searchValue}
        onChange={handleInputChange}
        onKeyDown={(event) => {
          if (event.key === "Enter" && searchValue) {
            window.location.href = `/anime?q=${searchValue}`;
          }
        }}
      />
      <Link
        type="button"
        className={`${
          searchValue
            ? "translate-x-0 opacity-100 bg-red-300 dark:bg-red-700 hover:px-5"
            : "-translate-x-6 opacity-0 cursor-default"
        } px-4 py-2 rounded-e-full z-0 transition-all duration-200 outline-none`}
        to={searchValue ? `/anime?q=${searchValue}` : ""}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="scale-150"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
          />
        </svg>
      </Link>
    </div>
  );
}
