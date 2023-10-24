import { blogList } from "../../services";
import { BlogList } from "./components";
import { LanguageContext } from "../../services";
import { useContext, useEffect } from "react";

export const Blog = () => {
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

  return (
    <section className="news" id="newsId">
      <div className="news-top">
        <div className="news-wrap">
          <h1 className="news-title">
            <span className="news-block"></span> BLOGS
          </h1>
        </div>
      </div>
      <div className="news-flex">
        <div>
          <BlogList blogs={blogList} />
        </div>
      </div>
    </section>
  );
};
