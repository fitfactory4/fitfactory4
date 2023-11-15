import { HashLink as Link } from "react-router-hash-link";
export const BlogItem = ({ blog: { title, url, date, cover } }) => {
  return (
    <div className="news-flex-box">
      <Link className="" smooth to={`/${url}#`}>
        <div className="flex-item">
          <img className="news-main-png" src={cover} alt={cover} />
          <p className="news-date">{date}</p>
        </div>
        <div className="title-parent">
          <h3 className="flex-main-title">{title}</h3>
        </div>
      </Link>
    </div>
  );
};
