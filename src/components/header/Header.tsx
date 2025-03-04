import SocialLinks from "../SocialLinks";
import Navbar from "./navbar/Navbar";
import Profile from "./profile/Profile";
import Searchbar from "./SearchBar";

interface HeaderProps {
  setSearchQuery: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ setSearchQuery }) => {
  return (
    <header>
      {/* Upper Header - Static */}
      <div className="flex flex-col xl:flex-row justify-center xl:justify-between items-between px-1 xl:px-10 pt-8 pb-4 mt-20">
  <SocialLinks />
  <Searchbar setSearchQuery={setSearchQuery} />
</div>

      {/* Lower Header - Sticky */}
      <div className="fixed top-0 start-0 z-50 flex justify-between w-full p-4 border-b border-gray-200 bg-gray-200">
        <div className="flex items-center justify-between px-10">
          <figure className="flex items-center">
            <img
              src="https://res.cloudinary.com/dxjjsfami/image/upload/v1737625533/logo_un0lvu.png"
              alt="logo"
              className="h-16"
            />
            <Navbar />
          </figure>
          <div className="flex items-center space-x-4">
            <Profile />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;