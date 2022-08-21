import { Link } from "react-router-dom";
import Card from "./Card";
import { useState } from "react";

const HomePage = (props) => {
  const [authenticated, setAuthenticated] = useState(true);
  return (
    <>
      <nav>
        <h2 className="text-3xl inline-block">Welcome to the homepage!</h2>
        <Link
          className="bg-amber-500 text-cyan-800 rounded-lg px-1 m-5 "
          to="/about"
        >
          ....About Us
        </Link>
        <button onClick={() => setAuthenticated((prev) => !prev)}>
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
