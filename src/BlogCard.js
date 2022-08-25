import React from "react";
import { Link } from "react-router-dom";

const BlogCard = (props) => {
  //url to send to when clicked on blog BlogCard
  const url = `./blog/${props.blogItem.id}`;
  return (
    <div className="p-3 basis-1/1 md:basis-1/2 xl:basis-1/3 ">
      <div className="bg-slate-900 text-orange-500 flex-auto rounded-3xl p-3">
        <Link to={url} className={props.className} {...props.others}>
          <h1 className="text-2xl">
            <span className="select-none">o </span>
            {props.blogItem.title}
          </h1>
          <p>{props.blogItem.body}</p>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
