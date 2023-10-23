import { useParams } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

export const BlogPost = (props) => {
  const { blogPng, p, h3 } = props;

  const { blogId } = useParams();

  return (
    <Link smooth to={blogId}>
      <div className="news-flex-box">
        <div className="flex-item">
          <img className="news-main-png" src={blogPng} alt={`${blogPng}.svg`} />
          <p className="news-date">{p}</p>
        </div>
        <h3 className="flex-main-title">{h3}</h3>
      </div>
    </Link>
  );
};
