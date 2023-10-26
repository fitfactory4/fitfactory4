import { blogListEn, blogList } from "../../services";
import { BlogList } from "./components";
import { LanguageContext } from "../../services";
import { useContext, useEffect, useState } from "react";
import { ScrollArrow } from "../../globalComponents";

export const Blog = () => {
  const { langs, language } = useContext(LanguageContext);

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
            <span className="news-block"></span>
            {langs[language].blogs.navLinkTitle}
          </h1>
        </div>
      </div>
      <div className="news-flex">
        <div>
          <BlogList blogs={langs[language].blogs.blogLang} />
        </div>
      </div>
      <ScrollArrow />
    </section>
  );
};
