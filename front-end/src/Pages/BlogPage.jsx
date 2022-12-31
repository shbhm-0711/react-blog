import React from "react";
import BlogCard from "../Components/BlogCard";
import { blogContext } from "../App";

const BlogPage = (props) => {
  const { state, _ } = React.useContext(blogContext);
  return (
    <React.Fragment>
      {state.data !== null && state.loading === false ? (
        <div className="flex flex-wrap flex-row ">
          {state.data.blogs[0].id === -1 ? (
            <h1 className="text-5xl">Be Patient. We're Getting the data...</h1>
          ) : (
            state.data.blogs.map((item) => {
              return <BlogCard className="" blogItem={item} key={item.id} />;
            })
          )}
        </div>
      ) : (
        <h1>Loading</h1>
      )}
    </React.Fragment>
  );
};

export default BlogPage;
