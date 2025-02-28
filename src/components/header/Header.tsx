import Navbar from "./navbar/Navbar";
import Profile from "./profile/Profile";
import Searchbar from "./SearchBar";

interface HeaderProps {
  setSearchQuery: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ setSearchQuery }) => {
  return (
    <header className="grid grid-col-4 mx-auto">
      <div className="mx-auto pt-8 pb-4">
        <Searchbar setSearchQuery={setSearchQuery} />
      </div>
      <div className="px-5 lg:px-40 flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="https://res.cloudinary.com/dxjjsfami/image/upload/v1737625533/logo_un0lvu.png"
            alt="logo"
            style={{ height: "63.97px" }}
          />
          <Navbar />
        </div>
        <div className="flex items-center space-x-4">
          <Profile />
        </div>
      </div>
    </header>
  );
};

export default Header;
