import { Link, useNavigate } from "react-router-dom";
import { ReactPortal } from "react";

const NavBar = ({ authenticated, setAuthenticated }) => {
  let navigate = useNavigate();
  console.log(window.location.pathname);
  return (
    <nav className="flex-col bg-stone-900 sm:flex-row md:justify-around">
      <h2 className="text-3xl m-3 block md:inline">Welcome to the BlogPage!</h2>
      <button className="text-indigo-800 font-semibold  border-x-2 px-1 bg-opacity-50 bg-lime-200 m-3 mx-1 block sm:inline min-w-[110px] text-center">
        <Link to="/">Home Page</Link>
      </button>
      {/* <button className="text-indigo-800 font-semibold  border-x-2 px-1 bg-opacity-50 bg-lime-200 m-3 mx-1 block sm:inline min-w-[110px] text-center">
        <Link to="/login-page">Login-page</Link>
      </button> */}
      {window.location.pathname.toString() !== "/login-page" && (
        <button
          className="text-indigo-800 font-semibold  border-x-2 px-1 bg-opacity-50 bg-lime-200 m-3 mx-1 block sm:inline min-w-[110px] text-center"
          onClick={() => {
            if (authenticated) {
              setAuthenticated((prev) => !prev);
            } else {
              navigate("/login-page");
            }
          }}
        >
          {authenticated ? "Log out" : "log in"}
        </button>
      )}
    </nav>
  );
};

export default NavBar;
