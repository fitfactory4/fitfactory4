import { BlogList } from "./blogComponents";
import { ScrollArrow } from "../../../ScrollArrow";
import { useState } from "react";
import { blogList1, blogList2 } from "../../../../services";

export const Blogs = () => {
  const [search1, setSearch1] = useState(true);
  const [search2, setSearch2] = useState(false);

  const handleSearchClick1 = () => {
    setSearch1(true);
    setSearch2(false);
  };
  const handleSearchClick2 = () => {
    setSearch2(true);
    setSearch1(false);
  };

  return (
    <section className="news" id="blogs">
      <div className="news-top">
        <div className="blog-top-content">
          <h2 className="blog-main-title">ბლოგები</h2>
          <div className="blog-line"></div>
        </div>
      </div>
      <div className="news-flex">
        <div>
          {search1 ? (
            <BlogList blogs={blogList1} />
          ) : (
            <BlogList blogs={blogList2} />
          )}
        </div>
      </div>
      <div className="search-bar">
        <div className="search-bar-top">
          <div
            onClick={handleSearchClick1}
            className={`"search-box search-1 ${search1 && "search-clicked"}`}
          >
            <p className="search-text">1</p>
          </div>
          <div
            onClick={handleSearchClick2}
            className={`"search-box search-2 ${search2 && "search-clicked"}`}
          >
            <p className="search-text">2</p>
          </div>
        </div>
      </div>
      <ScrollArrow />
    </section>
  );
};
