import { Link } from "react-router-dom";

export const BlogItem = ({ blog: { id, title, url, date, cover } }) => {
  return (
    <div className="news-flex-box">
      <Link className="" to={`/blogs/${url}`}>
        <div className="flex-item">
          <img className="news-main-png" src={cover} alt={cover} />
          <p className="news-date">{date}</p>
        </div>
        <h3 className="flex-main-title">{title}</h3>
      </Link>
    </div>
  );
};
