import "./App.css";
import React, { useState } from "react";
import BlogPage from "./Pages/BlogPage";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import Blog from "./Pages/Blog";
import HomePage from "./Pages/HomePage";
import NavBar from "./Pages/Components/NavBar";
import useFetch from "./customHooks/useFetch";
import { BlogContext, blogsVal } from "./customHooks/useCustomContexts";

function App() {
  const [authenticated, setAuthenticated] = useState(true);
  const [blogRes, dataLoading, error] = useFetch("/api/v1/blogs");

  return (
    <BlogContext.Provider value={blogsVal}>
      <NavBar
        authenticated={authenticated}
        setAuthenticated={setAuthenticated}
      ></NavBar>
      <Routes>
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
