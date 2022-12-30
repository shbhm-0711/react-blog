import { BlogContext } from "./useCustomContexts";
import React, { useContext } from "react";

export const useBlog = () => useContext(BlogContext);

const useBlogs = () => {
  return useContext(BlogContext);
};

export default useBlogs;
