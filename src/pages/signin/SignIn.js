import React, { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";


// Initialize SweetAlert2 with React support
const MySwal = withReactContent(Swal);

const Login = () => {
  const [inputUsername, setInputUsername] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    await delay(500);
    console.log(`Username :${inputUsername}, Password :${inputPassword}`);
    
    if (inputUsername !== "admin" || inputPassword !== "admin") {
      // Trigger SweetAlert2 for error
      MySwal.fire({
        icon: 'error',
        title: 'Incorrect username or password',
        text: 'Please check your credentials and try again.',
        confirmButtonColor: '#3085d6',
      });
    }
    setLoading(false);
  };

  const handlePassword = () => {
    MySwal.fire({
      icon: 'info',
      title: 'Forgot Password?',
      text: 'Please contact the administrator to reset your password.',
      confirmButtonColor: '#3085d6',
    });
  };

  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-cover bg-center relative overflow-hidden"
      style={{ backgroundImage: `url("/background.png")` }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Form */}
      <form
        className="relative z-10 w-96 max-w-[90%] bg-white p-6 rounded-lg shadow-lg animate-slideIn"
        onSubmit={handleSubmit}
      >
        {/* Header */}
        <h2 className="text-2xl font-bold text-center mb-4">Sign In</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
          <input
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
            type="text"
            value={inputUsername}
            placeholder="Username"
            onChange={(e) => setInputUsername(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
            type="password"
            value={inputPassword}
            placeholder="Password"
            onChange={(e) => setInputPassword(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center justify-between mb-4">
          <label className="flex items-center text-sm">
            <input type="checkbox" className="mr-2" />
            Remember me
          </label>
          <button
            className="text-sm text-blue-600 hover:underline"
            type="button"
            onClick={handlePassword}
          >
            Forgot password?
          </button>
        </div>
        <div className="mb-4">
          {!loading ? (
            <button
              className="w-full bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600"
              type="submit"
            >
              Log In
            </button>
          ) : (
            <button
              className="w-full bg-blue-500 text-white rounded-md p-2 opacity-70 cursor-not-allowed"
              type="submit"
              disabled
            >
              Logging In...
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
