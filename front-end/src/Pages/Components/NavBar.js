import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SuccessOrFailModal from "./SuccessOrFailModal.js";

const NavBar = ({ authenticated, setAuthenticated }) => {
  const [nullAuth, setNullAuth] = useState(null);
  let navigate = useNavigate();
  // console.log(window.location.pathname);
  return (
    <nav className=" bg-stone-900 bg-gradient-to-t from-slate-800 to-slate-900 shadow-2xl shadow-[#071531] flex-row md:justify-around text-center p-4 pt-2 mb-5">
      <h2 className="text-3xl m-3 mt-0 block md:inline">
        React-Blogs<span className="text-sm align-top">©</span>
      </h2>
      <button className="text-indigo-300 font-semibold rounded-md p-1 bg-opacity-50 bg-gradient-to-t from-blue-800 to-slate-800 shadow-3xl mx-1 mt-1 inline w-[110px]">
        <Link to="/">Home Page</Link>
      </button>
      <button className="text-indigo-300 font-semibold rounded-md p-1 bg-opacity-50 bg-gradient-to-t from-blue-800 to-slate-800 shadow-3xl mx-1 mt-1 inline w-[110px]">
        <Link to="/blogs-page">All Blogs</Link>
      </button>
      {window.location.pathname.toString() !== "/login-page" && (
        <button
          className="text-indigo-300 font-semibold rounded-md p-1 bg-opacity-50 bg-gradient-to-t from-blue-800 to-slate-800 shadow-3xl mx-1 mt-1 inline w-[110px]"
          onClick={() => {
            if (authenticated) {
              setAuthenticated((prev) => !prev);
              setNullAuth(true);
            } else {
              navigate("/login-page");
              setNullAuth(null);
            }
          }}
        >
          {authenticated ? "Log out" : "log in"}
        </button>
      )}
      {nullAuth && (
        <SuccessOrFailModal
          nullAuth={nullAuth}
          setNullAuth={setNullAuth}
          action="Logged out"
        />
      )}
    </nav>
  );
};

export default NavBar;
