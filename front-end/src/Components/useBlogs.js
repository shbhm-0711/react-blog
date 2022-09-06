import { BlogContext } from "../Components/useCustomContexts";
import { useContext } from "react";

export const useBlog = () => useContext(BlogContext);

const useBlogs = () => {
  return useContext(BlogContext);
};

export default useBlogs;
