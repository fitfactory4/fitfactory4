import { BlogItem } from "./BlogItem";

export const BlogList = ({ blogs }) => {
  return (
    <div className="news-flex-top">
      {blogs.map((blog, index) => (
        <BlogItem key={index} blog={blog} />
      ))}
    </div>
  );
};
