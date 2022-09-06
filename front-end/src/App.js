import "./App.css";
import { useState } from "react";
import BlogPage from "./Pages/BlogPage";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import Blog from "./Pages/Blog";
import HomePage from "./Pages/HomePage";
import NavBar from "./Pages/Components/NavBar";
import useFetch from "./Components/useFetch";
import { BlogContext, blogsVal } from "./Components/useCustomContexts";

function App() {
  //dummy blog, to be fetched from api
  const [authenticated, setAuthenticated] = useState(true);
  const [blogsOff, dataLoading, error] = useFetch(
    "http://localhost:5000/api/v1/blogs"
  );
  console.log("data:");
  console.log(blogsOff);
  console.log("loading:");
  console.log(dataLoading);
  console.log("error:");
  console.log(error);
  const blogs = [
    {
      id: 1,
      title: "Blog_one",
      body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, quae aspernatur? Ab nesciunt explicabo non? Molestiae iusto perspiciatis aut laborum architecto quam illo magnam fugiat est cum officiis consequatur provident ea, tempora at quaerat. Debitis soluta dolores vero natus quia praesentium deleniti voluptates rem magni itaque quos, delectus dolore autem!",
      author: "B",
    },
    {
      id: 2,
      title: "Blog_two",
      body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, quae aspernatur? Ab nesciunt explicabo non? Molestiae iusto perspiciatis aut laborum architecto quam illo magnam fugiat est cum officiis consequatur provident ea, tempora at quaerat. Debitis soluta dolores vero natus quia praesentium deleniti voluptates rem magni itaque quos, delectus dolore autem!",
      author: "A",
    },
    {
      id: 3,
      title: "Blog_Three",
      body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, quae aspernatur? Ab nesciunt explicabo non? Molestiae iusto perspiciatis aut laborum architecto quam illo magnam fugiat est cum officiis consequatur provident ea, tempora at quaerat. Debitis soluta dolores vero natus quia praesentium deleniti voluptates rem magni itaque quos, delectus dolore autem!",
      author: "C",
    },
    {
      id: 4,
      title: "Blog_Four",
      body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, quae aspernatur? Ab nesciunt explicabo non? Molestiae iusto perspiciatis aut laborum architecto quam illo magnam fugiat est cum officiis consequatur provident ea, tempora at quaerat. Debitis soluta dolores vero natus quia praesentium deleniti voluptates rem magni itaque quos, delectus dolore autem!",
      author: "B",
    },
    {
      id: 5,
      title: "Blog_Five",
      body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, quae aspernatur? Ab nesciunt explicabo non? Molestiae iusto perspiciatis aut laborum architecto quam illo magnam fugiat est cum officiis consequatur provident ea, tempora at quaerat. Debitis soluta dolores vero natus quia praesentium deleniti voluptates rem magni itaque quos, delectus dolore autem!",
      author: "B",
    },
    {
      id: 6,
      title: "Blog_Six",
      body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, quae aspernatur? Ab nesciunt explicabo non? Molestiae iusto perspiciatis aut laborum architecto quam illo magnam fugiat est cum officiis consequatur provident ea, tempora at quaerat. Debitis soluta dolores vero natus quia praesentium deleniti voluptates rem magni itaque quos, delectus dolore autem!",
      author: "C",
    },
    {
      id: 7,
      title: "Blog_Seven",
      body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, quae aspernatur? Ab nesciunt explicabo non? Molestiae iusto perspiciatis aut laborum architecto quam illo magnam fugiat est cum officiis consequatur provident ea, tempora at quaerat. Debitis soluta dolores vero natus quia praesentium deleniti voluptates rem magni itaque quos, delectus dolore autem!",
      author: "A",
    },
    {
      id: 8,
      title: "Blog_Eight",
      body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, quae aspernatur? Ab nesciunt explicabo non? Molestiae iusto perspiciatis aut laborum architecto quam illo magnam fugiat est cum officiis consequatur provident ea, tempora at quaerat. Debitis soluta dolores vero natus quia praesentium deleniti voluptates rem magni itaque quos, delectus dolore autem!",
      author: "A",
    },
  ];

  return (
    <BlogContext.Provider value={blogsVal}>
      <NavBar
        authenticated={authenticated}
        setAuthenticated={setAuthenticated}
      ></NavBar>
      {/* react-router setup, <Routes> component strictly check and render element */}
      {/* according to path(URI) */}
      <Routes>
        {/* <Route/> components creates a connection, but doesn't render anything */}
        <Route path="/" element={<HomePage />} />
        <Route path="/blogs-page" exact element={<BlogPage blogs={blogs} />} />
        <Route path="/blog/:id" element={<Blog blogs={blogs} />} />
        <Route
          path="/login-page"
          element={<LoginPage setAuthenticated={setAuthenticated} />}
        />
      </Routes>
    </BlogContext.Provider>
  );
}

export default App;
