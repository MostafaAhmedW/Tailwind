import { useEffect, useState } from "react";
import imge from "../../assets/asset.png";
import { Link, NavLink } from "react-router-dom";
export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode === "true") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode);

    if (newMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <>
      <nav className="bg-white pb-3 shadow-lg">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between p-4">
          <Link
            to={"/"}
            className="flex items-center space-x-3 rtl:space-x-reverse ms-0"
          >
            <img src={imge} className="h-7" alt="APPEXY Logo" />
          </Link>

          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          <div
            className="hidden w-full md:flex md:w-auto md:justify-between md:items-center mx-auto"
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 rounded-lg md:flex-row md:space-x-10 rtl:space-x-reverse md:mt-0 ">
              <li>
                <NavLink
                  to={"/"}
                  className="block py-2 px-3 text-black rounded-sm hover:text-green-600 dark:text-stone-300"
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/about"}
                  className="block py-2 px-3 text-black rounded-sm hover:text-green-600 dark:text-stone-300  "
                  aria-current="page"
                >
                  About
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={"/contact"}
                  className="block py-2 px-3 text-black rounded-sm hover:text-green-600 dark:text-stone-300  "
                  aria-current="page"
                >
                  Contact
                </NavLink>
              </li>
            </ul>

            <button
              onClick={toggleDarkMode}
              className="text-sm bg-black text-white dark:bg-white dark:text-black  px-4 py-2 rounded-lg shadow-2xl cursor-pointer ms-6 "
            >
              {darkMode ? " Dark Mode " : "Light Mode"}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
