import "./App.css";
import React, { useState } from "react";
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
  const [blogRes, dataLoading, error] = useFetch(
    "http://localhost:3000/api/v1/blogs"
  );
  // console.log("data:");
  // console.log(blogRes);
  // console.log("loading:");
  // console.log(dataLoading);
  // console.log("error:");
  // console.log(error);

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
        <Route
          path="/blogs-page"
          exact
          element={
            <BlogPage
              blogs={
                blogRes
                  ? blogRes.blogs
                  : [
                      {
                        id: -1,
                        title: "Loading data or Error in loading",
                        body: [
                          {
                            type: "p",
                            props: {
                              className: `text-sm`,
                              children: `demo`,
                            },
                          },
                        ],
                        author: "By React blogs",
                      },
                    ]
              }
            />
          }
        />
        <Route
          path="/blog/:id"
          element={
            <Blog
              blogs={
                blogRes
                  ? blogRes.blogs
                  : [
                      {
                        id: -1,
                        title: "Loading data or Error in loading",
                        body: "this is a Failure demo, check if serer is running",
                        author: "By Ract blogs",
                      },
                    ]
              }
            />
          }
        />
        <Route
          path="/login-page"
          element={<LoginPage setAuthenticated={setAuthenticated} />}
        />
      </Routes>
    </BlogContext.Provider>
  );
}

export default App;
