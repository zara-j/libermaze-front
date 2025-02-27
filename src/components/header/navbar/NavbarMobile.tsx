import { Link } from "react-router-dom";
import { useState } from "react";
import NotificationMobile from "../profile/NotificationMobile";

const NavbarMobile: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <div className="-mr-2 flex overflow-x-hidden">
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex md:hidden items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
          aria-controls="mobile-menu"
          aria-expanded={menuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className={menuOpen ? "hidden h-6 w-6" : "block h-6 w-6"}
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          <svg
            className={menuOpen ? "block h-6 w-6" : "hidden h-6 w-6"}
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div
          className="fixed inset-0 z-50 md:hidden bg-gray-900 bg-opacity-75 overflow-y-scroll max-h-screen"
          id="mobile-menu"
        >
          <div className="space-y-1 px-2 pb-3 pt-6 relative">
            <button
              onClick={closeMenu}
              className="absolute top-3 right-4 text-gray-400 hover:text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              ></svg>
              <span className="sr-only">Close menu</span>
            </button>

            <div className="border-t border-gray-700 pb-3 pt-6">
              <div className="flex items-center px-5 pt-5">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://cdn.jsdelivr.net/gh/alohe/memojis/png/notion_12.png"
                    alt="User Profile"
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium leading-none text-white">
                    Guy
                  </div>
                </div>
                <NotificationMobile />
              </div>
            </div>

            <div className="mt-3 space-y-1 px-2 ">
              <Link
                to="/"
                onClick={closeMenu}
                className="block bg-gray-900 text-white rounded-md px-3 py-2 text-base font-medium no-underline"
              >
                Home
              </Link>
              <Link
                to="/reports"
                onClick={closeMenu}
                className="block text-gray-300 rounded-md px-3 py-2 text-base font-medium hover:bg-gray-700 hover:text-white no-underline"
              >
                Reports
              </Link>
            </div>

            <div className="mt-3 space-y-1 px-2">
              <Link
                to="/dashboard"
                onClick={closeMenu}
                className="block text-gray-300 rounded-md px-3 py-2 text-base font-medium hover:bg-gray-700 hover:text-white no-underline"
              >
                Dashboard
              </Link>
              <Link
                to="/booklist"
                onClick={closeMenu}
                className="block text-gray-300 rounded-md px-3 py-2 text-base font-medium hover:bg-gray-700 hover:text-white no-underline"
              >
                Books
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavbarMobile;
