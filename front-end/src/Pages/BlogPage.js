import BlogCard from "./Components/BlogCard";
// import { BlogContext } from "../Components/useCustomContexts";
// import { useContext } from "react";
// import useBlogs, { useBlog } from "../Components/useBlogs";

const BlogPage = (props) => {
  // const bCtx = useContext(BlogContext);
  // console.log("react shit", bCtx);
  // console.log("this shit i want");
  // console.log(useBlogs);
  // console.log("this shit i want 2.0");
  // console.log(useBlog);
  return (
    <>
      <div className="flex flex-wrap flex-row ">
        {props.blogs ? (
          props.blogs.map((item) => {
            return <BlogCard className="" blogItem={item} key={item.id} />;
          })
        ) : (
          <h1>Loading...........</h1>
        )}
      </div>
    </>
  );
};

export default BlogPage;
