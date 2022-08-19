import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card";

const HomePage = (props) => {
  return (
    <>
      <main>
        <nav>
          <h2 className="text-3xl inline-block">Welcome to the homepage!</h2>
          <Link
            className="bg-amber-500 text-cyan-800 rounded-lg px-1 m-5 "
            to="/about"
          >
            ....About Us
          </Link>
        </nav>
        <div className="flex flex-wrap flex-row ">
          {props.blogs.map((item) => {
            return <Card className="" blogItem={item} key={item.id} />;
          })}
        </div>
      </main>
    </>
  );
};

export default HomePage;
