import { useState, useEffect } from 'react';
import SocialLinks from "../SocialLinks";
import Navbar from "./navbar/Navbar";
import Profile from "./profile/Profile";
import Searchbar from "./SearchBar";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header>
      {/* Upper Content */}
      <div className="flex flex-col xl:flex-row justify-center xl:justify-between items-center gap-4 mx-8 pt-8 pb-4 bg-[#F8F1F6]">
        <SocialLinks />
        <Searchbar />
      </div>

      {/* scroll Navbar  */}
      <div className={`z-50 w-full p-4 shadow-md bg-[#F8F1F6] transition-all duration-800 ease-in-out ${isScrolled ? 'fixed top-0 shadow-lg rounded-md bg-gray-200' : 'relative top-0'}`}>
        <div className="flex items-center justify-between px-10 mx-auto">
          <figure className="flex items-center">
            <img
              src="https://res.cloudinary.com/dxjjsfami/image/upload/v1737625533/logo_un0lvu.png"
              alt="logo"
              className="h-16 transition-transform duration-300 hover:scale-105"
            />
            <Navbar />
          </figure>
          <div className="flex items-center space-x-4">
            <Profile />
          </div>
        </div>
      </div>
      {isScrolled && <div className="h-[72px]"></div>}
    </header>
  );
};

export default Header;