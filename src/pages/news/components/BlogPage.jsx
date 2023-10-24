import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { blogList } from "../../../services";
import { LanguageContext } from "../../../services";

export const BlogPage = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  const { language } = useContext(LanguageContext);

  useEffect(() => {
    const body = document.getElementById("body");
    const logo = document.querySelector(".logo");
    if (language === "en") {
      logo.style.fontFamily = "Kanit, sans-serif";
      body.style.fontFamily = "Kanit, sans-serif";
    } else {
      body.style.fontFamily = "Contractica R";
      body.style.fontFeatureSettings = `"case"`;
      logo.style.fontFamily = "Kanit, sans-serif";
    }
  });

  useEffect(() => {
    let blog = blogList.find((blog) => blog.id === parseInt(id));
    if (blog) {
      setBlog(blog);
    }
  }, [id]);
  return (
    <div className="post-container">
      {blog && (
        <div className="blog-post-main">
          <div className="blog-post-flex">
            <h1 className="blog-post-title">{blog.title}</h1>
            <p className="blog-post-text">{blog.date}</p>
          </div>
          <img className="blog-post-png" src={blog.cover} alt={blog.cover} />
          <section className="post-info">
            <div className="post-info-top">
              <p className="post-info-text">{blog.description}</p>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};
