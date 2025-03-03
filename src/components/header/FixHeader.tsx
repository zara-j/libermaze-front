import Navbar from "./navbar/Navbar";
import Profile from "./profile/Profile";

interface HeaderProps {}

const FixHeader: React.FC<HeaderProps> = () => {
  return (
    <div className="flex items-center justify-between fixed bg-gray-100 border border-gray-200 w-full px-10">
    <figure className="flex items-center">
      <img
        src="https://res.cloudinary.com/dxjjsfami/image/upload/v1737625533/logo_un0lvu.png"
        alt="logo"
        style={{ height: "63.97px" }}
      />
      <Navbar />
    </figure>
    <div className="flex items-center space-x-4">
      <Profile />
    </div>
  </div>
  );
};

export default FixHeader;
