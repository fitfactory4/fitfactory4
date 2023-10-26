import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { blogListEn, blogList, BlogPageContext } from "../../../services";
import { LanguageContext } from "../../../services";
import { ArrowLeft, ScrollArrow } from "../../../globalComponents";

export const BlogPage = () => {
  const { url } = useParams();

  const { setBlogPage, blogPage, blogList, blogListEn, setBlogKa, setBlogEn } =
    useContext(BlogPageContext);
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

  useEffect(() => {
    let blog = langs[language].blogs.blogLang;
    let blogPage = blog.find((blog) => blog.url === url);
    let blogPageKa = blogList.find((blog) => blog.url === url);
    let blogPageEn = blogListEn.find((blog) => blog.url === url);
    if (blogPage) {
      setBlogPage(blogPage);
    }
    if (blogPageKa) {
      setBlogKa(blogPageKa);
    }
    if (blogPageEn) {
      setBlogEn(blogPageEn);
    }
    console.log(blogPage);
  }, [url, language]);
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
};
