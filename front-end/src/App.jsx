import "./App.css";
import React from "react";
import { Blog, BlogPage, LoginPage, HomePage } from "./Pages/index";
import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";

export const blogContext = React.createContext(null);

const initialState = {
  data: null,
  loading: true,
  error: null,
  authenticated: true,
  user: "Demo",
};

function reducer(state, action) {
  switch (action.type) {
    case "FETCH_DATA_SUCCESS":
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case "FETCH_DATA_ERROR":
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case "LOADING_TRUE":
      return { ...state, loading: true };
    case "LOADING_FALSE":
      return { ...state, loading: false };
    case "AUTH":
      return { ...state, authenticated: !state.authenticated };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  React.useEffect(() => {
    (async function fetchData() {
      fetch("/api/v1/blogs")
        .then((res) => res.json())
        .then((data) => {
          dispatch({ type: "FETCH_DATA_SUCCESS", payload: data });

          console.log(data);
        })
        .catch((error) =>
          dispatch({ type: "FETCH_DATA_ERROR", payload: error })
        );
    })();
  }, []);

  return (
    <blogContext.Provider value={{ state, dispatch }}>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blogs-page" exact element={<BlogPage />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/login-page" element={<LoginPage />} />
      </Routes>
    </blogContext.Provider>
  );
}

export default App;
