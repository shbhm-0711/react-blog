import BlogCard from "./Components/BlogCard";

const BlogPage = (props) => {
  return (
    <>
      <div className="flex flex-wrap flex-row ">
        {props.blogs.map((item) => {
          return <BlogCard className="" blogItem={item} key={item.id} />;
        })}
      </div>
    </>
  );
};

export default BlogPage;
