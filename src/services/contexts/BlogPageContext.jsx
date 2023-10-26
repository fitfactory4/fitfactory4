import { createContext, useState } from "react";
import { blogList, blogListEn } from "../config";

export const BlogPageContext = createContext();

export const BlogPageContextProvider = ({ children }) => {
  const [blogPage, setBlogPage] = useState(null);
  const [blogKa, setBlogKa] = useState(null);
  const [blogEn, setBlogEn] = useState(null);
  return (
    <BlogPageContext.Provider
      value={{
        blogPage,
        setBlogPage,
        blogList,
        blogListEn,
        setBlogEn,
        setBlogKa,
        blogEn,
        blogKa,
      }}
    >
      {children}
    </BlogPageContext.Provider>
  );
};
