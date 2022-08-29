import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [authenticated, setAuthenticated] = useState(true);

  return (
    <nav className="flex-col sm:flex-row md:justify-around">
      <h2 className="text-3xl m-3 block md:inline">Welcome to the BlogPage!</h2>
      <button className="text-indigo-800 font-semibold  border-x-2 px-1 bg-opacity-50 bg-lime-200 m-3 mx-1 block sm:inline min-w-[110px] text-center">
        <Link to="/">Home Page</Link>
      </button>
      <button className="text-indigo-800 font-semibold  border-x-2 px-1 bg-opacity-50 bg-lime-200 m-3 mx-1 block sm:inline min-w-[110px] text-center">
        <Link to="/login-page">Login-page</Link>
      </button>
      <button
        className="text-indigo-800 font-semibold  border-x-2 px-1 bg-opacity-50 bg-lime-200 m-3 mx-1 block sm:inline min-w-[110px] text-center"
        onClick={() => setAuthenticated((prev) => !prev)}
      >
        {authenticated ? "Log out" : "Log in"}
      </button>
    </nav>
  );
};

export default NavBar;
