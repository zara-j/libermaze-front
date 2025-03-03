import SocialLinks from "../SocialLinks";
import FixHeader from "./FixHeader";
import Searchbar from "./SearchBar";

interface HeaderProps {
  setSearchQuery: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ setSearchQuery }) => {
  return (
    <header>
      <div className="flex flex-col xl:flex-row justify-center xl:justify-between items-between px-1 xl:px-10 pt-8 pb-4">
        <SocialLinks />
        <Searchbar setSearchQuery={setSearchQuery} />
      </div>
    <FixHeader />
    </header>
  );
};

export default Header;
