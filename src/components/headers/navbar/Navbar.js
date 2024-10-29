import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="hidden md:block">
        <div className="ml-10 flex items-baseline space-x-4">
          <Link to="/dashboard" className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium no-underline	" aria-current="page">Dashboard</Link>
          <Link to="/" className="text-blue-500 swrl hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 text-sm font-medium no-underline	">Home</Link>
          <Link to="/booklist" className="text-blue-500 swrl hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 text-sm font-medium no-underline	">Books</Link>
          <Link to="/signin" className="text-blue-500 swrl hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 text-sm font-medium no-underline	">Sign in</Link>
          <Link to="/reports"className="text-blue-500 swrl hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 text-sm font-medium no-underline	">Reports</Link>
        </div>
      </div>
    </>

  );
}

export default Navbar;

