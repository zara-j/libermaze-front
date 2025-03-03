import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <>
      <div className="hidden md:block">
        <div className="ml-10 flex items-baseline space-x-4">
          <Link
            to="#"
            className="hover:text-green-300 rounded-md px-3 py-2 text-sm font-medium no-underline	"
            aria-current="page"
          >
            Dashboard
          </Link>
          <Link
            to="/"
            className="hover:text-green-300 rounded-md px-3 py-2 text-sm font-medium no-underline	"
          >
            Home
          </Link>
          <Link
            to="/books"
            className="hover:text-green-300 rounded-md px-3 py-2 text-sm font-medium no-underline	"
          >
            Books
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
