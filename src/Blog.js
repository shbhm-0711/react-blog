import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Blog = (props) => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  useEffect(() => {
    let blogn = props.blogs.find((blog) => blog.id === parseInt(id));
    if (blogn) {
      setBlog(blogn);
    }
  }, [id, props.blogs]);
  return (
    <>
      <Link className="bg-amber-500 text-cyan-800 rounded-lg p-1 m-2" to="/">
        ← go back
      </Link>
      {blog ? (
        <>
          <h1>{blog.title}</h1>
          <p>{blog.body}</p>
        </>
      ) : (
        <h1>Searching</h1>
      )}
    </>
  );
};

export default Blog;
