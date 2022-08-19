import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Blog = (props) => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  useEffect(() => {
    let blogn = props.blogs.find((blog) => blog.id === parseInt(id));
    if (blogn) {
      setBlog(blogn);
    }
  }, []);
  return (
    <>
      <h1>{blog.title}</h1>
      <p>{blog.body}</p>
    </>
  );
};

export default Blog;
