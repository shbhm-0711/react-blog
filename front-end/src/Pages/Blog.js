import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Blog = (props) => {
  //takes url parameter defined in route component using : (:id in this case)
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  useEffect(() => {
    //stores blog from props which matches URI id
    let blogn;
    props.blogs
      ? (blogn = props.blogs.find((blog) => blog.id === parseInt(id)))
      : (blogn = null);
    // if blogn is not null setting blog state
    console.log(blogn);
    if (blogn) {
      setBlog(blogn);
    }
  }, [id, props.blogs]);
  return (
    <>
      {/* button to go back to homepage */}
      <Link
        className="bg-amber-500 text-cyan-800 rounded-lg p-1 m-2"
        to="/blogs-page"
      >
        ← go back
      </Link>
      {blog ? (
        <>
          <h1>{blog.title}</h1>
          <p>{blog.body}</p>
        </>
      ) : (
        <h1>Searching or Invalid Link</h1>
      )}
    </>
  );
};

export default Blog;
