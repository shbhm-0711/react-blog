import React from "react";
import { Link, useParams } from "react-router-dom";
import { blogContext } from "../App";

const Blog = () => {
  const { state, _ } = React.useContext(blogContext);

  //takes url parameter defined in route component using : (:id in this case)
  const { id } = useParams();
  const [blog, setBlog] = React.useState(null);

  React.useEffect(() => {
    //stores blog from props which matches URI id
    let blogn;
    state.data.blogs
      ? (blogn = state.data.blogs.find((blog) => blog.id === parseInt(id)))
      : (blogn = null);
    // if blogn is not null setting blog state
    console.log(blogn);
    if (blogn) {
      setBlog(blogn);
    }
  }, [id, state.data.blogs]);

  return (
    <>
      {/* button to go back to homepage */}
      <Link
        className="bg-amber-500 text-cyan-800 rounded-lg p-1 m-2"
        to="/blogs-page"
      >
        ← back
      </Link>
      {blog ? (
        <div className="mx-auto w-[70%]">
          <h1 className="mx-auto flex justify-center text-3xl shadow-md shadow-blue-800 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl text-slate-900 mb-5">
            {blog.title}
          </h1>
          {/* <p>{blog.body}</p> */}
          {blog.body.map((i, index) => (
            <React.Fragment key={index}>
              {React.createElement(i.type, i.props)}
            </React.Fragment>
          ))}
        </div>
      ) : (
        <h1>Searching or Invalid Link</h1>
      )}
    </>
  );
};

export default Blog;
