import { useState, useEffect, useContext } from "react";
import { LanguageContext, blogList2 } from "../services";
import { ArrowLeft, ScrollArrow } from "../globalComponents";

export default function Blog7() {
  const [blogPage, setBlgoPage] = useState(blogList2[0]);

  const { language } = useContext(LanguageContext);

  useEffect(() => {
    const body = document.getElementById("body");
    const logo = document.querySelector(".logo");
    const globe = document.querySelector(".globe-svg");
    globe.style.display = "none";
    if (language === "en") {
      logo.style.fontFamily = "Kanit, sans-serif";
      body.style.fontFamily = "Kanit, sans-serif";
    } else {
      body.style.fontFamily = "Contractica R";
      body.style.fontFeatureSettings = `"case"`;
      logo.style.fontFamily = "Kanit, sans-serif";
    }
    const header = document.getElementById("main-header");
    const footer = document.getElementById("main-footer");
    header.style.display = "block";
    footer.style.display = "block";
  });

  return (
    <div className="post-container">
      <div>
        <button className="post-btn">
          <ArrowLeft />
        </button>
      </div>
      {blogPage && (
        <div className="blog-post-main">
          <div className="blog-post-flex">
            <h1 className="blog-post-title">{blogPage.title}</h1>
            <p className="blog-post-text">{blogPage.date}</p>
          </div>
          <img
            className="blog-post-png"
            src={blogPage.cover}
            alt={blogPage.cover}
          />
          <section className="post-info">
            <div className="post-info-top">
              <p className="post-info-text">{blogPage.description}</p>
            </div>
          </section>
        </div>
      )}
      <ScrollArrow />
    </div>
  );
}
