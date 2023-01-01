import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { blogContext } from "../App.jsx";
import SuccessOrFailModal from "./SuccessOrFailModal.jsx";

const NavBar = () => {
  const [nullAuth, setNullAuth] = React.useState(null);
  let navigate = useNavigate();
  const { state, dispatch } = React.useContext(blogContext);
  // console.log(window.location.pathname);
  return (
    <nav className=" bg-stone-900 bg-gradient-to-t from-slate-800 to-slate-900 shadow-2xl shadow-[#071531] flex-row md:justify-around text-center p-4 pt-2 mb-5">
      <Link to="/">
        <h2 className="text-3xl m-3 mt-0 block md:inline">
          React-Blogs<span className="text-sm align-top">©</span>
        </h2>
      </Link>
      {/* <button className="text-indigo-300 font-semibold rounded-md p-1 bg-opacity-50 bg-gradient-to-t from-blue-800 to-slate-800 shadow-3xl mx-1 mt-1 inline w-[110px]"></button> */}
      <button className="text-indigo-300 font-semibold rounded-md p-1 bg-opacity-50 bg-gradient-to-t from-blue-800 to-slate-800 shadow-3xl mx-1 mt-1 inline w-[110px]">
        <Link to="/blogs-page">All Blogs</Link>
      </button>
      {window.location.pathname.toString() !== "/login-page" && (
        <button
          className="text-indigo-300 font-semibold rounded-md p-1 bg-opacity-50 bg-gradient-to-t from-blue-800 to-slate-800 shadow-3xl mx-1 mt-1 inline w-[110px]"
          onClick={() => {
            if (state.authenticated) {
              dispatch({ type: "AUTH" });
              setNullAuth(true);
            } else {
              navigate("/login-page");
              setNullAuth(null);
            }
          }}
        >
          {state.authenticated ? "Log out" : "log in"}
        </button>
      )}
      {nullAuth && (
        <SuccessOrFailModal
          nullAuth={nullAuth}
          setNullAuth={setNullAuth}
          action="Logging out"
        />
      )}
    </nav>
  );
};

export default NavBar;
