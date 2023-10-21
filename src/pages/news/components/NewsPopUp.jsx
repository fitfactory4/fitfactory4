export const NewsPopUp = (props) => {
  const { isActive, h2, img, p } = props;

  return (
    <div className={isActive ? "pop-up-news-active" : "pop-up-news"}>
      <div className="pop-up-top">
        <div className="pop-up-left">
          <h2 className="pop-up-title">{h2}</h2>
          <p className="pop-up-main-text">{p}</p>
        </div>
        <div className="pop-up-right">
          <img src={img} alt={`${img}.svg`} />
        </div>
      </div>
    </div>
  );
};
