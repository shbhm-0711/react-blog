import { Link } from "react-router-dom";
// import icon from `${process.env.PUBLIC_URL}+${"/Blog192.png"}`;
// import icon from "/Blog192.png";

const BlogCard = (props) => {
  //url to send to when clicked on blog BlogCard
  const url = `../blog/${props.blogItem.id}`;
  return (
    <div className="p-3 basis-1/1 md:basis-1/2 xl:basis-1/3 ">
      <div className="bg-slate-900 text-orange-500 flex-auto rounded-3xl p-3">
        <Link to={url} className={props.className} {...props.others}>
          <h1 className="text-2xl">
            <span className="select-none">o </span>
            {props.blogItem.title}
          </h1>
          <p>{props.blogItem.body}</p>
          <div className="flex">
            {/* <img src={process.env.PUBLIC_URL+"/Blog192.png"} alt="auther dp" className="h-3 w-3"></img> */}
            <img
              src="/Blog192.png"
              alt="auther dp"
              className="h-8 w-8 rounded-xl"
            ></img>
            <h1 className="text-3xl ml-3">~ {props.blogItem.author}</h1>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
