import { Link } from "react-router-dom";
import Card from "./Card";
import { useState } from "react";

const HomePage = (props) => {
  const [authenticated, setAuthenticated] = useState(true);
  return (
    <>
      <nav className="flex justify-center items-center">
        <h2 className="text-3xl inline-block m-3">Welcome to the homepage!</h2>
        <Link
          className="text-indigo-800 font-semibold  border-x-2 px-2 bg-opacity-30 bg-white m-3 "
          to="/about"
        >
          About Us
        </Link>
        <button
          className="text-indigo-800 font-semibold  border-x-2 px-2 bg-opacity-30 bg-white m-3"
          onClick={() => setAuthenticated((prev) => !prev)}
        >
          {authenticated ? "Log out" : "Log in"}
        </button>
      </nav>
      <div className="flex flex-wrap flex-row ">
        {props.blogs.map((item) => {
          return <Card className="" blogItem={item} key={item.id} />;
        })}
      </div>
    </>
  );
};

export default HomePage;
