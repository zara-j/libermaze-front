import Navbar from '../../headers/navbar/Navbar' ;
import Profile from './profile/Profile';
import "./Header.css";

const Header = () => {

  return (
    <div className="min-h-full">
      <div className="bg-yellow-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1>BookNovo</h1>
              </div>
                <Navbar />
              </div>
              <div>
                <Profile />
              </div>          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
