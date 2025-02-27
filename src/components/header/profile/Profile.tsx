import { useState } from "react";
import Notification from "./Notification";
import NavbarMobile from "../navbar/NavbarMobile";

const Profile: React.FC = () => {
  const [profileOpen, setProfileOpen] = useState<boolean>(false);

  return (
    <>
      <nav className="bg-primary">
        <div className="hidden md:block">
          <div className="ml-4 flex items-center md:ml-6">
            <Notification />
            <div className="relative ml-3">
              <div>
                <button
                  onClick={() => setProfileOpen(!profileOpen)}
                  type="button"
                  className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  id="user-menu-button"
                  aria-expanded={profileOpen}
                  aria-haspopup="true"
                >
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://cdn.jsdelivr.net/gh/alohe/memojis/png/vibrent_6.png"
                    alt="Profile"
                  />
                </button>
              </div>
              {profileOpen && (
                <div
                  className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                >
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 no-underline hover:bg-gray-400"
                    role="menuitem"
                  >
                    Your Profile
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 no-underline hover:bg-gray-400"
                    role="menuitem"
                  >
                    Settings
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 no-underline hover:bg-gray-400"
                    role="menuitem"
                  >
                    Sign out
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
        <NavbarMobile />
      </nav>
    </>
  );
};
export default Profile;
